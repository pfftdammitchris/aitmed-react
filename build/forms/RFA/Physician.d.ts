import React from 'react';
interface RFA_PhysicianProps {
    name: 'physician';
    component: React.FC<any>;
    specialties: string[];
}
declare const RFA_Physician: React.FC<RFA_PhysicianProps>;
export default RFA_Physician;
