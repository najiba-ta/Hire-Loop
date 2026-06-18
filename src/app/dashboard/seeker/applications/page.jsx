import ApplicationsTable from '@/components/ApplicationTable';
import { getApplicationsByApplicant } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const ApplicationsPage =async () => {
    const user = await getUserSession()
    const jobs = await getApplicationsByApplicant(user.id)
    return (
        <div>
          <ApplicationsTable jobs = {jobs}/>
        </div>
    );
};

export default ApplicationsPage;