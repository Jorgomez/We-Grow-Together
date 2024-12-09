import { useState, useEffect, useRef } from 'react'

import { toast } from 'react-toastify'
import { getAllElements } from '../../API/Requests/genericRequest/getAllElements'

export const useSkillRequests = (initialOffset = 0, limit = 20) => {
  const [skillRequests, setSkillRequests] = useState([])
  const [error, setError] = useState(null)
  const [offset, setOffset] = useState(initialOffset)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const isFetching = useRef(false)

  const getSkillRequests = async (offset, limit) => {
    if (isFetching.current) return
    isFetching.current = true

    setLoading(true)
    try {
      const response = await getAllElements(
        `/skillRequests/progressive?offset=${offset}&limit=${limit}`
      )

      if (response.error) {
        setError(response.error)
        toast.error(response.error)
      } else {
        setSkillRequests((prevRequests) => {
          const newRequests = response.skillRequests.filter(
            (newReq) =>
              !prevRequests.some((prevReq) => prevReq._id === newReq._id)
          )
          return [...prevRequests, ...newRequests]
        })
        setHasMore(response.hasMore)
      }
    } catch (error) {
      setError(error.message)
      toast.error(error.message)
    } finally {
      isFetching.current = false
      setLoading(false)
    }
  }

  const loadMore = () => {
    if (!loading && hasMore) {
      setOffset((prevOffset) => prevOffset + limit)
    }
  }

  return {
    skillRequests,
    error,
    hasMore,
    loadMore,
    offset,
    getSkillRequests,
    loading
  }
}
