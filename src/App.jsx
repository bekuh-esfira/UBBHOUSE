import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header/Header';
import About from './pages/About'
import Rentals from './pages/Rentals';
import Districts from './pages/Districts';
import NewBuildings from './pages/new-buildings';
import News from './pages/news';
import Contacts from './pages/Conacts';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import ProjectsPage from './pages/ProjectsPage';
import UBBHomesPage from './pages/UBBHomesPage'
import Review from "./pages/Review"
import TechnologiesPage from './pages/TechnologiesPage';
import CategoryPage from './components/Category/CategoryPage';
// import Categories from './pages/Category/Category';
import LearnMore from './pages/LearnMorePage';
import IndividualApproach from './pages/IndividualApproach';
import EcoMaterials from './pages/EcoMaterials';
import OnTimeDelivery from './pages/OnTimeDelivery';
import HumorousPage from './pages/HumorousPage/HumorousPage';
import Chat from './Chat/Chat';
import Bron from './Bron/Bron'


function App() {
  return (  
    <Router>
      <div className='wrapper'>
        <Header />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/districts" element={<Districts />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/new-buildings" element={<NewBuildings />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/uBBHomesPage" element={<UBBHomesPage />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/learnMore" element={<LearnMore />} />
        <Route path="/IndividualApproach" element={<IndividualApproach />} />
        <Route path="/EcoMaterials" element={<EcoMaterials />} />
        <Route path="/OnTimeDelivery" element={<OnTimeDelivery />} />
        <Route path="/HumorousPage" element={<HumorousPage />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Bron" element={<Bron />} />


        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        {/* <Switch>
        <Route exact path="/" component={Districts} />
        <Route
          path="/favorites"
          render={() => <Favorites likedDistricts={likedDistricts} districts={districts} />}
        />
      </Switch> */}

        </Routes>
      </div>
    </Router>
  )
}
export default App;