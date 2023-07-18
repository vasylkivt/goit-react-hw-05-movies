import { Cast, Reviews, SharedLayout } from 'components';
import { Home, MovieDetails, Movies } from 'pages';
import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

// const Home = lazy(() => import('pages/Home/Home'));
// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const Reviews = lazy(() => import('components/Cast/Cast'));
// const Cast = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// const products = [
//   { id: 'h-1', name: 'Hoodie 1' },
//   { id: 'h-2', name: 'Hoodie 2' },
//   { id: 'h-3', name: 'Hoodie 3' },
//   { id: 's-1', name: 'Sneakers 1' },
//   { id: 's-2', name: 'Sneakers 2' },
//   { id: 's-3', name: 'Sneakers 3' },
//   { id: 's-4', name: 'Sneakers 4' },
//   { id: 'p-1', name: 'Pants 1' },
//   { id: 'p-2', name: 'Pants 2' },
//   { id: 'p-3', name: 'Pants 3' },
// ];

// export const App = () => {
//   return (
//     <div>
//       <nav>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/products">Products</NavLink>
//         <Login />
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:idf/:FFW" element={<ProductDetails />} />
//         <Route path="/profile" element={<ProfileDetails />} />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

// export const NotFound = () => {
//   return <div>NotFound</div>;
// };
// export const Home = () => {
//   return <div>Home</div>;
// };
// export const About = () => {
//   return (
//     <div>
//       <Link to={'mission'}>mission</Link>
//       <Link to={'team'}>team</Link>
//       <Link to={'reviews'}>reviews</Link>
//       <Outlet />
//     </div>
//   );
// };
// export const Mission = () => {
//   return (
//     <div>
//       <h2>Mission</h2>
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quae
//         similique debitis ullam explicabo quas fuga blanditiis pariatur dolores
//         libero beatae provident unde rerum earum id consequuntur quo officia
//         tempora.
//       </p>
//     </div>
//   );
// };
// export const Team = () => {
//   return (
//     <div>
//       <h2>Team</h2>
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quae
//         similique debitis ullam explicabo quas fuga blanditiis pariatur dolores
//         libero beatae provident unde rerum earum id consequuntur quo officia
//         tempora.
//       </p>
//       m
//     </div>
//   );
// };
// export const Reviews = () => {
//   return (
//     <div>
//       {' '}
//       <h2>Reviews</h2>
//       <p>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quae
//         similique debitis ullam explicabo quas fuga blanditiis pariatur dolores
//         libero beatae provident unde rerum earum id consequuntur quo officia
//         tempora.
//       </p>
//     </div>
//   );
// };
// export const Products = () => {
//   return <ProductList />;
// };

// export const ProductList = () => {
//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>
//           <Link to={`${product.id}/${product.name}`}>
//             <div>{product.name}</div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export const ProductDetails = () => {
//   const params = useParams();

//   return (
//     <div>
//       {params.idf}
//       {params.FFW}
//     </div>
//   );
// };

// export const Login = () => {
//   const navigate = useNavigate();
//   console.log('navigate:', navigate);

//   const handleSubmit = async values => {
//     const response = await values;
//     if (response) {
//       navigate('/profile', { replace: true });
//     }
//   };

//   return (
//     <div>
//       <h1>Login page</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   );
// };

// export const LoginForm = ({ onSubmit }) => {
//   return (
//     <form onSubmit={() => onSubmit({ name: 'jon', pass: 'qwerty' })} action="">
//       <input type="email" name="" />
//       <input type="password" name="" />
//       <button type="submit">submit</button>
//     </form>
//   );
// };

// export const ProfileDetails = () => {
//   return <div>ProfileDetails</div>;
// };
