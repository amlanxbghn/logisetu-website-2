import { cn } from "@/lib/utils"
import GridPattern from "./ui/grid-pattern"

const Team = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
      <div className="container">
        <h2 className="text-4xl text-center md:text-5xl font-semibold mb-3 tracking-tight bg-gradient-to-b from-white via-white to-[#111111] text-transparent bg-clip-text">
          Meet Out Team
        </h2>
      </div>
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  )
}

export default Team