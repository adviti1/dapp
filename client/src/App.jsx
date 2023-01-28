//import{navbar, welcome,footer,loader,services,transactions} from './components';
//import "./dist/output.css";
import"./components/footer.jsx";
import"./components/navbar.jsx";
import"./components/services.jsx";
import"./components/transactions.jsx";
import"./components/welcome.jsx";

c

const App = () => {
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
    <navbar /> 
    <welcome />
    <h1 class="text-3xl font-bold underline">
    Hello world! 
  </h1>
  </div>
  <services />
  <transactions />
  <footer />
    </div>
  );
}

export default App
