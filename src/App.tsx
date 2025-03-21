// src/App.tsx
import {
  Authenticator,
  View,
  Flex,
  Menu,
  MenuItem,
  SideNavigation,
  Divider,
} from "@aws-amplify/ui-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { theme } from "./theme";

const Navigation = () => {
  const { user, signOut } = useAuthenticator();
  const navigate = useNavigate();
  const userGroups =
    user?.signInUserSession?.getAccessToken().payload["cognito:groups"] || [];

  return (
    <SideNavigation>
      <Flex direction="column" gap="zero">
        {/* Admin only pages */}
        {userGroups.includes("admin") && (
          <>
            <SideNavigation.Link onClick={() => navigate("/users")}>
              Users
            </SideNavigation.Link>
            <SideNavigation.Link onClick={() => navigate("/locations")}>
              Locations
            </SideNavigation.Link>
            <SideNavigation.Link onClick={() => navigate("/units")}>
              Units
            </SideNavigation.Link>
          </>
        )}

        {/* Manager and Admin pages */}
        {(userGroups.includes("manager") || userGroups.includes("admin")) && (
          <>
            <SideNavigation.Link onClick={() => navigate("/shifts")}>
              Shifts
            </SideNavigation.Link>
            <SideNavigation.Link onClick={() => navigate("/products")}>
              Products
            </SideNavigation.Link>
          </>
        )}

        {/* All authenticated users */}
        <SideNavigation.Link onClick={() => navigate("/stock-mutations")}>
          Stock Mutations
        </SideNavigation.Link>
        <SideNavigation.Link onClick={() => navigate("/profile")}>
          Profile
        </SideNavigation.Link>

        <Divider />
        <SideNavigation.Link onClick={signOut}>Sign Out</SideNavigation.Link>
      </Flex>
    </SideNavigation>
  );
};

function App() {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <Authenticator loginMechanisms={["email"]} theme={theme}>
          <Flex direction="row">
            <Navigation />
            <View flex="1" padding="medium">
              <Routes>
                <Route
                  path="/stock-mutations"
                  element={<StockMutationPage />}
                />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/locations" element={<LocationPage />} />
                <Route path="/units" element={<UnitPage />} />
                <Route path="/shifts" element={<ShiftPage />} />
                <Route path="/users" element={<UserPage />} />
              </Routes>
            </View>
          </Flex>
        </Authenticator>
      </BrowserRouter>
    </Authenticator.Provider>
  );
}

export default App;
