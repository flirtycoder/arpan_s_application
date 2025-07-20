import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Ending from '@/components/common/Ending';

const page = () => {
    return (
    <div>
           <AnnouncementBar
                message="Get early access on launches and offers."
                linkText="Sign Up For Texts"
                linkUrl="/signup"
              />
              <Header />

              <Ending/>
    </div>
    );
}
 
export default page;