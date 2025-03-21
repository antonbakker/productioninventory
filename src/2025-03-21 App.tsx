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
import { StockMutationIndex } from "./pages/StockMutationIndex.tsx";
import { Profile } from "./pages/Profile.tsx";
import { Home } from "./pages/Home.tsx";
import { StockMutationCreate } from "./pages/StockMutationCreate.tsx";

const Navigation = () => {
  const { user, signOut } = useAuthenticator();
  const navigate = useNavigate();
  const userGroups =
    user?.signInUserSession?.getAccessToken().payload["cognito:groups"] || [];

  return (
    <View style={{ width: 300, flexDirection: "column" }}>
      <Flex
        direction="column"
        padding="10px"
        color={"white"}
        backgroundColor={"darkgray"}
      >
        <Link to={"/"}>Home</Link>

        {/* Admin only pages */}
        {
          // userGroups.includes("admin") &&
          <>
            <Link to={"/users"}>Users</Link>
            <Link to={"/locations"}>Locations</Link>
            <Link to={"/units"}>Units</Link>
          </>
        }

        {/* Manager and Admin pages */}
        {
          // (userGroups.includes("manager") || userGroups.includes("admin")) &&
          <>
            <Link to={"/shifts"}>Shifts</Link>
            <Link to={"/products"}>Product</Link>
          </>
        }

        {/* All authenticated users */}
        <Link to={"/stock-mutations"}>Stock Mutations</Link>
        <Link to={"/profile"}>Profile</Link>

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
                backgroundColor: "lightgrey",
              }}
            >
              <Navigation />
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: "red",
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/stock-mutations"
                  element={<StockMutationIndex />}
                />
                <Route
                  path="/stock-mutations/create"
                  element={<StockMutationCreate />}
                />
                <Route path="/profile" element={<Profile />} />
                {/*<Route path="/products" element={<ProductPage />} />*/}
                {/*<Route path="/locations" element={<LocationPage />} />*/}
                {/*<Route path="/units" element={<UnitPage />} />*/}
                {/*<Route path="/shifts" element={<ShiftPage />} />*/}
                {/*<Route path="/users" element={<UserPage />} />*/}
              </Routes>
            </View>
          </View>
        </Authenticator>
      </BrowserRouter>
    </Authenticator.Provider>
  );
}

export default App;
