import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import En
const page = () => {
    return (
    <div>
           <AnnouncementBar
                message="Get early access on launches and offers."
                linkText="Sign Up For Texts"
                linkUrl="/signup"
              />
              <Header />
              
    </div>
    );
}
 
export default page;