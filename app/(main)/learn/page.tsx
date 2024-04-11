
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

export const LearnPage = async() => {
  const userProgressData= getUserProgress();
  const[
    userProgress
  ]=await Promise.all([
    userProgressData
  ]);
  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses");
  }

  return (

   <div className="flex flex-row-reverse gap-[48px] px-6 ">
    <StickyWrapper>
    <UserProgress
    activeCourse={{ title: "spanish", imageSrc: "/es.svg" }}
    hearts={0}
    points={0}
    hasActiveSubscription={false}
/>

    </StickyWrapper>
    <FeedWrapper>
      <Header title="spanish"/>
    
    </FeedWrapper>
   </div>
  )
};
export default LearnPage;
