import { JobList } from "@/components/job-list"
import Sidebar from "@/components/sidebar/sidebar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui"
import { useState } from "react"

export function Homepage() {
  const [sidebarWidth, setSidebarWidth] = useState(0)

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[100vh] max-w-full rounded-lg border"
    >
      <ResizablePanel
        defaultSize={20}
        minSize={10}
        maxSize={15}
        onResize={(e) => setSidebarWidth(e)}
        collapsible
        collapsedSize={4}
      >
        <Sidebar sidebarWidth={sidebarWidth} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40} minSize={35}>
        <JobList />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40} minSize={25} maxSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Detail Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
