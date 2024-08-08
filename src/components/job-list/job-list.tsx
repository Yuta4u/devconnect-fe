import { useDispatch, useSelector } from "react-redux"
import Card from "./reusable/card"
import { RootState } from "@/state/store"
import { useEffect } from "react"
import { getAllPost } from "@/state/counter/postSlice"

export function JobList() {
  const dispatch = useDispatch()
  const allPost = useSelector(
    (state: RootState) => state.counter.postSlice.joblist
  )

  useEffect(() => {
    if (allPost.length === 0) {
      dispatch(getAllPost())
    }
  }, [])
  return (
    <div className="w-full min-h-full max-h-[90vh] p-6 overflow-y-auto gap-3 flex flex-col">
      {allPost.map((data, index) => (
        <div key={index}>
          <Card data={data} />
        </div>
      ))}
    </div>
  )
}
