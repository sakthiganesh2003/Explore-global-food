
import Navbar from '@/component/navbar';
import StepProgress from "@/component/StepProgress";

export default function Maid() {
  return (
    <div className="min-h-screen bg-gray-500 ">
      <Navbar/>

        <StepProgress/>
    </div>
  );
}