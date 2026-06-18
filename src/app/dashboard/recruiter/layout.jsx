import { requirRole } from "@/lib/core/session";


const RecruiterLayout = async({children}) => {
    await requirRole('recruiter')
    return children;
};

export default RecruiterLayout;