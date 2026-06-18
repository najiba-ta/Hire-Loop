import { requirRole } from "@/lib/core/session";

const SeekerLayout = async ({children}) => {
    await requirRole ('seeker')
    return children
    
};

export default SeekerLayout;