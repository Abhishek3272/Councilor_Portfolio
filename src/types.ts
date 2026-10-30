export type GrievanceStatus =
  | 'Submitted'
  | 'Under Review'
  | 'Forwarded to Department'
  | 'In Progress'
  | 'Resolved'
  | 'Closed';

export interface WorkItem {
  id: string;
  code: string;
  title: string;
  titleMr?: string;
  category:
    | 'Water Supply'
    | 'Roads & Drainage'
    | 'Street Lighting'
    | 'Gardens & Spaces'
    | 'Sanitation'
    | 'Public Facilities';
  status: 'Completed' | 'In Progress' | 'Proposed';
  location: string;
  locationMr?: string;
  description: string;
  descriptionMr?: string;
  image?: string;
  fullDetails?: {
    contractor?: string;
    sanctionDate?: string;
    targetCompletion?: string;
    estimatedBudget?: string;
    beneficiaries?: string;
    beneficiariesMr?: string;
    scopeOfWork?: string[];
    scopeOfWorkMr?: string[];
  };
}

export interface InitiativeItem {
  id: string;
  title: string;
  titleMr?: string;
  schedule: string;
  scheduleMr?: string;
  icon: string;
  iconColor: 'saffron' | 'green';
  description: string;
  descriptionMr?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleMr?: string;
  category: 'inspection' | 'works' | 'meetings' | 'development';
  categoryLabel: string;
  categoryLabelMr?: string;
  location: string;
  locationMr?: string;
  date: string;
  image: string;
  description: string;
  descriptionMr?: string;
}

export interface GrievanceTicket {
  ticketId: string;
  name: string;
  mobile: string;
  area: string;
  category: string;
  description: string;
  timestamp: string;
  status: GrievanceStatus;
  assignedOfficer?: string;
  progressPercent: number;
  remarks?: string;
  photoUrl?: string;
  priority?: 'Normal' | 'High' | 'Urgent';
  history?: {
    step: string;
    stepMr: string;
    time: string;
    done: boolean;
  }[];
}

export interface NewsItem {
  id: string;
  title: string;
  titleMr: string;
  category: 'Notice' | 'Meeting' | 'Development' | 'Community' | 'Health';
  categoryLabel: string;
  categoryLabelMr: string;
  date: string;
  dateMr: string;
  readTime: string;
  readTimeMr: string;
  urgent?: boolean;
  summary: string;
  summaryMr: string;
  content: string;
  contentMr: string;
  issuedBy: string;
  issuedByMr: string;
}

export interface CivicPoll {
  id: string;
  question: string;
  questionMr: string;
  category: string;
  totalVotes: number;
  options: {
    id: string;
    label: string;
    labelMr: string;
    votes: number;
  }[];
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'New' | 'Read' | 'Replied';
}

export interface MapPoint {
  id: string;
  title: string;
  titleMr: string;
  category: string;
  categoryMr: string;
  address: string;
  addressMr: string;
  xPercent: number; // for custom SVG responsive map
  yPercent: number;
  status: string;
  statusMr: string;
  googleMapUrl: string;
  highlights: string[];
}
