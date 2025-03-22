// src/App.tsx
import {
  Authenticator,
  Button,
  Divider,
  Flex,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { LocationList } from "./pages/LocationList.tsx";
import { LocationCreate } from "./pages/LocationCreate.tsx";
import { UnitList } from "./pages/UnitList.tsx";
import { UnitCreate } from "./pages/UnitCreate.tsx";
import { ProductList } from "./pages/ProductList.tsx";
import { ProductCreate } from "./pages/ProductCreate.tsx";
import { ShiftList } from "./pages/ShiftList.tsx";
import { ShiftCreate } from "./pages/ShiftCreate.tsx";
import { MutationTypeList } from "./pages/MutationTypeList.tsx";
import { MutationTypeCreate } from "./pages/MutationTypeCreate.tsx";
import { StockMutationIndex } from "./pages/StockMutationIndex.tsx";
import { StockMutationList } from "./pages/StockMutationList.tsx";
import { StockMutationCreate } from "./pages/StockMutationCreate.tsx";
// import { LocationCreate } from "./pages/LocationCreate.tsx";

const Navigation = () => {
  const { user, signOut } = useAuthenticator();
  const navigate = useNavigate();
  const userGroups =
    user?.signInUserSession?.getAccessToken().payload["cognito:groups"] || [];

  return (
    // <View style={{ width: 300, flexDirection: "column" }}>
    <View style={{ width: 300, flexDirection: "column" }}>
      <Flex
        direction="column"
        padding="10px"
        // color={"white"}
        // backgroundColor={"darkgray"}
      >
        <Link to={"/"}>Home</Link>

        {/* Admin only pages */}
        {
          // userGroups.includes("admin") &&
          <>
            {/* <Link to={"/user"}>UserList</Link> */}
            <Link to={"/location"}>Locaties</Link>
            <Link to={"/unit"}>Eenheden</Link>
          </>
        }

        {/* Manager and Admin pages */}
        {
          // (userGroups.includes("manager") || userGroups.includes("admin")) &&
          <>
            <Link to={"/shift"}>Shifts</Link>
            <Link to={"/product"}>Producten</Link>
          </>
        }

        {/* All authenticated users */}
        <Link to={"/stock-mutation"}>Mutaties</Link>
        {/* <Link to={"/profile"}>Profielen</Link> */}

        <Divider />
        <Button onClick={signOut}>Sign Out</Button>
      </Flex>
    </View>
  );
};

function App() {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <Authenticator loginMechanisms={["email"]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              height: "100vh",
              flex: 1,
            }}
          >
            <View
              style={{
                height: "100%",
                // backgroundColor: "lightgrey",
              }}
            >
              <Navigation />
            </View>
            <View
              style={{
                width: "100%",
                // backgroundColor: "red",
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/unit" element={<UnitList />} />
                <Route path="/mutation-type" element={<MutationTypeList />} />
                <Route path="/shift" element={<ShiftList />} />
                <Route path="/unit-create" element={<UnitCreate />} />
                <Route
                  path="/mutation-type/create"
                  element={<MutationTypeCreate />}
                />
                <Route path="/shift/create" element={<ShiftCreate />} />
                <Route path="/location" element={<LocationList />} />
                <Route path="/location/create" element={<LocationCreate />} />
                <Route path="/product" element={<ProductList />} />
                <Route path="/product/create" element={<ProductCreate />} />
                <Route
                  path="/stock-mutation/index"
                  element={<StockMutationList />} //<<
                />
                <Route
                  path="/stock-mutation"
                  element={<StockMutationIndex />} //<<
                />
                <Route
                  path="/stock-mutation/create"
                  element={<StockMutationCreate />}
                />
                {/*<Route
                  path="/user-profile"
                  element={<UserProfileList />}
                />*/}
              </Routes>
            </View>
          </View>
        </Authenticator>
      </BrowserRouter>
    </Authenticator.Provider>
  );
}

export default App;
