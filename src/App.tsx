// src/App.tsx
import {
  Authenticator,
  Card,
  Button,
  Divider,
  Flex,
  Grid,
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
import { ImHome } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { ImLab } from "react-icons/im";
import { ImClock } from "react-icons/im";
import { ImEnlarge } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { ImLock } from "react-icons/im";
import { ImLoop } from "react-icons/im";
import { ImKey } from "react-icons/im";
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
import { MutationTypeCreate } from "./pages/MutationTypeCreste.tsx";
import { StockMutationIndex } from "./pages/StockMutationIndex.tsx";
import { StockMutationList } from "./pages/StockMutationList.tsx";
import { StockMutationCreate } from "./pages/StockMutationCreate.tsx";
// import { LocationCreate } from "./pages/LocationCreate.tsx";

const Navigation = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator();
  // const navigate = useNavigate();
  // const userGroups =
  //   user?.signInUserSession?.getAccessToken().payload["cognito:groups"] || [];

  return (
    // <View style={{ width: 300, flexDirection: "column" }}>
    <Grid
      columnGap="0.5rem"
      rowGap="0.5rem"
      templateColumns="1fr 1fr"
      templateRows="0.25fr 1fr 0.25fr"
    >
      <Card columnStart="1" columnEnd="-1" rowStart="1" rowEnd="1">
        <Button variation="primary" colorTheme="error" onClick={signOut}>
          <ImLock />
        </Button>
      </Card>
      <Card columnStart="1" columnEnd="1" rowStart="2" rowEnd="-1">
        <View
          style={{
            // width: 300,
            flexDirection: "column",
            color: "white",
            backgroundColor: "#222222",
          }}
        >
          <Flex
            direction="column"
            padding="10px"
            // color={"white"}
            // backgroundColor={"darkgray"}
          >
            <Flex direction="row" gap="small">
              <Button
                variation="link"
                style={{ color: "white", backgroundColor: "transparent" }}
                loadingText=""
                onClick={() => {
                  navigate("/");
                }}
              >
                <Flex direction="row" gap="small">
                  <ImHome />
                  Home
                </Flex>
              </Button>
            </Flex>

            {/* Admin only pages */}
            {
              // userGroups.includes("admin") &&
              <>
                {/* <Link to={"/user"}>UserList</Link> */}
                <Flex direction="row" gap="small">
                  <Button
                    variation="link"
                    style={{ color: "white", backgroundColor: "transparent" }}
                    loadingText=""
                    onClick={() => {
                      navigate("/location");
                    }}
                  >
                    <Flex direction="row" gap="small">
                      <ImLocation />
                      Locaties
                    </Flex>
                  </Button>
                </Flex>

                <Flex direction="row" gap="small">
                  <Button
                    variation="link"
                    style={{ color: "white", backgroundColor: "transparent" }}
                    loadingText=""
                    onClick={() => {
                      navigate("/unit");
                    }}
                  >
                    <Flex direction="row" gap="small">
                      <ImEnlarge />
                      Eenheden
                    </Flex>
                  </Button>
                </Flex>

                <Flex direction="row" gap="small">
                  <Button
                    variation="link"
                    style={{ color: "white", backgroundColor: "transparent" }}
                    loadingText=""
                    onClick={() => {
                      navigate("/mutation-type");
                    }}
                  >
                    <Flex direction="row" gap="small">
                      <ImLoop />
                      Mutatietypes
                    </Flex>
                  </Button>
                </Flex>
              </>
            }
            {/* Manager and Admin pages */}
            {
              // (userGroups.includes("manager") || userGroups.includes("admin")) &&
              <>
                <Flex direction="row" gap="small">
                  <Button
                    variation="link"
                    style={{ color: "white", backgroundColor: "transparent" }}
                    loadingText=""
                    onClick={() => {
                      navigate("/shift");
                    }}
                  >
                    <Flex direction="row" gap="small">
                      <ImClock />
                      Shifts
                    </Flex>
                  </Button>
                </Flex>

                <Flex direction="row" gap="small">
                  <Button
                    variation="link"
                    style={{ color: "white", backgroundColor: "transparent" }}
                    loadingText=""
                    onClick={() => {
                      navigate("/product");
                    }}
                  >
                    <Flex direction="row" gap="small">
                      <ImLab />
                      Producten
                    </Flex>
                  </Button>
                </Flex>
              </>
            }

            {/* All authenticated users */}
            <Flex direction="row" gap="small">
              <Button
                variation="link"
                style={{ color: "white", backgroundColor: "transparent" }}
                loadingText=""
                onClick={() => {
                  navigate("/stock-mutation");
                }}
              >
                <Flex direction="row" gap="small">
                  <ImCheckboxChecked />
                  Mutaties
                </Flex>
              </Button>
            </Flex>
            {/* <Link to={"/profile"}>Profielen</Link> */}
          </Flex>
        </View>
      </Card>
      <Card columnStart="2" columnEnd="-1" rowStart="2" rowEnd="-1">
        {/* Main */}
      </Card>
      <Card columnStart="2" columnEnd="-1" rowStart="-1" rowEnd="-1">
        {/* Footer */}
      </Card>
    </Grid>
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
                <Route path="/unit/create" element={<UnitCreate />} />
                <Route path="/mutation-type" element={<MutationTypeList />} />
                <Route
                  path="/mutation-type/create"
                  element={<MutationTypeCreate />}
                />
                <Route path="/shift" element={<ShiftList />} />
                <Route path="/shift/create" element={<ShiftCreate />} />
                <Route path="/location" element={<LocationList />} />
                <Route path="/location/create" element={<LocationCreate />} />
                <Route path="/product" element={<ProductList />} />
                <Route path="/product/create" element={<ProductCreate />} />
                <Route
                  path="/stock-mutation/index"
                  element={<StockMutationIndex />} //<<
                />
                <Route
                  path="/stock-mutation"
                  element={<StockMutationList />} //<<
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
