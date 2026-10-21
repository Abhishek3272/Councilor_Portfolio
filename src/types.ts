export interface WorkItem {
  id: string;
  code: string;
  title: string;
  category: 'Water Supply' | 'Roads & Drainage' | 'Street Lighting' | 'Gardens & Spaces' | 'Sanitation' | 'Public Facilities';
  status: 'Completed' | 'In Progress' | 'Proposed';
  location: string;
  description: string;
  fullDetails?: {
    contractor?: string;
    sanctionDate?: string;
    targetCompletion?: string;
    estimatedBudget?: string;
    beneficiaries?: string;
    scopeOfWork?: string[];
  };
}

export interface InitiativeItem {
  id: string;
  title: string;
  schedule: string;
  icon: string;
  iconColor: 'saffron' | 'green';
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'inspection' | 'works' | 'meetings' | 'development';
  categoryLabel: string;
  location: string;
  date: string;
  image: string;
  description: string;
}

export interface GrievanceTicket {
  ticketId: string;
  name: string;
  mobile: string;
  area: string;
  category: string;
  description: string;
  timestamp: string;
  status: 'Registered' | 'Under Inspection' | 'In Progress' | 'Resolved';
  assignedOfficer?: string;
  progressPercent: number;
  remarks?: string;
  photoUrl?: string;
}
