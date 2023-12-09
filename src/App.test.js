import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // To mock Router in testing
import { Provider } from "react-redux"; // If Redux is used
import App from "./App"; // Your App component

// Mocking Redux store state
const mockStore = {
  auth: {
    isLogIn: true, // You can set other states as needed for testing
  },
  premium: {
    darkMode: false,
  },
};

// Mocking Redux store
const store = {
  getState: () => mockStore,
  subscribe: () => {},
  dispatch: () => {},
};

describe("App component", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    // Add your assertions here, e.g., check if certain elements are present after rendering
    expect(screen.getByText(/HeaderBar/i)).toBeInTheDocument();
    // Add more assertions as needed for your specific component
  });

  it("renders Home component when logged in", () => {
    // Test logic when the user is logged in and should see the Home component
    // Render App component with MemoryRouter and Provider wrapping
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    // Add your assertions here to check if the Home component is rendered as expected
    expect(screen.getByText(/Welcome to Home/i)).toBeInTheDocument();
    // Add more assertions as needed for your specific component
  });

  it("renders LogInPage component when not logged in", () => {
    // Test logic when the user is not logged in and should see the LogInPage component
    // Modify mockStore to simulate a logged out state
    const loggedOutStore = {
      ...mockStore,
      auth: {
        isLogIn: false,
      },
    };

    // Render App component with MemoryRouter and Provider wrapping
    render(
      <Provider store={{ getState: () => loggedOutStore }}>
        <MemoryRouter initialEntries={["/login"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    // Add your assertions here to check if the LogInPage component is rendered as expected
    expect(screen.getByText(/Login to your account/i)).toBeInTheDocument();
    // Add more assertions as needed for your specific component
  });

  // Add more test cases for different routes and scenarios as needed
});
