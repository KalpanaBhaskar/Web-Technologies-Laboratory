import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

// About
import AboutOverview from '../pages/about/AboutOverview';
import VisionMission from '../pages/about/VisionMission';
import Leadership from '../pages/about/Leadership';
import History from '../pages/about/History';

// Academics
import AcademicsOverview from '../pages/academics/AcademicsOverview';
import Undergraduate from '../pages/academics/Undergraduate';
import Postgraduate from '../pages/academics/Postgraduate';
import Schools from '../pages/academics/Schools';
import AcademicCalendar from '../pages/academics/AcademicCalendar';

// Admissions
import AdmissionsOverview from '../pages/admissions/AdmissionsOverview';
import UndergraduateAdmissions from '../pages/admissions/UndergraduateAdmissions';
import PostgraduateAdmissions from '../pages/admissions/PostgraduateAdmissions';
import ApplicationProcess from '../pages/admissions/ApplicationProcess';
import Scholarships from '../pages/admissions/Scholarships';
import ImportantDates from '../pages/admissions/ImportantDates';

// Research
import ResearchOverview from '../pages/research/ResearchOverview';
import ResearchCenters from '../pages/research/ResearchCenters';
import Innovation from '../pages/research/Innovation';
import ResearchHighlights from '../pages/research/ResearchHighlights';

// Campus Life
import CampusLife from '../pages/campus/CampusLife';
import Housing from '../pages/campus/Housing';
import Clubs from '../pages/campus/Clubs';
import Athletics from '../pages/campus/Athletics';
import CampusFacilities from '../pages/campus/CampusFacilities';

// Placements
import PlacementsOverview from '../pages/placements/PlacementsOverview';
import PlacementStatistics from '../pages/placements/PlacementStatistics';
import Recruiters from '../pages/placements/Recruiters';
import SuccessStories from '../pages/placements/SuccessStories';

// Contact
import ContactOverview from '../pages/contact/ContactOverview';
import AdmissionsOffice from '../pages/contact/AdmissionsOffice';
import CampusMap from '../pages/contact/CampusMap';

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutOverview />} />
      <Route path="/about/vision" element={<VisionMission />} />
      <Route path="/about/leadership" element={<Leadership />} />
      <Route path="/about/history" element={<History />} />

      <Route path="/academics" element={<AcademicsOverview />} />
      <Route path="/academics/undergraduate" element={<Undergraduate />} />
      <Route path="/academics/postgraduate" element={<Postgraduate />} />
      <Route path="/academics/schools" element={<Schools />} />
      <Route path="/academics/calendar" element={<AcademicCalendar />} />

      <Route path="/admissions" element={<AdmissionsOverview />} />
      <Route path="/admissions/undergraduate" element={<UndergraduateAdmissions />} />
      <Route path="/admissions/postgraduate" element={<PostgraduateAdmissions />} />
      <Route path="/admissions/application-process" element={<ApplicationProcess />} />
      <Route path="/admissions/scholarships" element={<Scholarships />} />
      <Route path="/admissions/dates" element={<ImportantDates />} />

      <Route path="/research" element={<ResearchOverview />} />
      <Route path="/research/centers" element={<ResearchCenters />} />
      <Route path="/research/innovation" element={<Innovation />} />
      <Route path="/research/highlights" element={<ResearchHighlights />} />

      <Route path="/campus-life" element={<CampusLife />} />
      <Route path="/campus-life/housing" element={<Housing />} />
      <Route path="/campus-life/clubs" element={<Clubs />} />
      <Route path="/campus-life/athletics" element={<Athletics />} />
      <Route path="/campus-life/facilities" element={<CampusFacilities />} />

      <Route path="/placements" element={<PlacementsOverview />} />
      <Route path="/placements/statistics" element={<PlacementStatistics />} />
      <Route path="/placements/recruiters" element={<Recruiters />} />
      <Route path="/placements/stories" element={<SuccessStories />} />

      <Route path="/contact" element={<ContactOverview />} />
      <Route path="/contact/admissions" element={<AdmissionsOffice />} />
      <Route path="/contact/map" element={<CampusMap />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
