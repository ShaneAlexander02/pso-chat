import { render } from "@testing-library/react";
import ConversationPage from "@/app/(root)/conversations/[conversationid]/page";
import Providers from "@/app/providers";
import ConversationsPage from "@/app/(root)/conversations/page";
import { useRouter } from "next/navigation";
import Home from "@/app/page";
import { fireEvent } from "@testing-library/react";

jest.mock("convex/react", () => ({
  ConvexReactClient: jest.fn(),
}));

jest.mock("@clerk/nextjs", () => ({
  useAuth: jest.fn().mockReturnValue({
    isSignedIn: true,
    userId: "mock-user-id",
  }),
}));

describe("ConversationPage", () => {
  it("renders ConversationContainer with children", () => {
    const { getByText } = render(<ConversationPage />);
    const textElement = getByText("ConversationPage");
    expect(textElement).toBeInTheDocument();
  });

  describe("AppPage", () => {
    it("redirects to /conversations when user is authenticated", async () => {
      const mockRouter = {
        push: jest.fn(),
      };

      jest.mock("@clerk/nextjs", () => ({
        useAuth: jest.fn().mockReturnValue({
          isSignedIn: true,
          userId: "mock-user-id",
        }),
      }));

      jest.mock("next/navigation", () => ({
        useRouter: jest.fn().mockReturnValue(mockRouter),
      }));

      render(<ConversationsPage />);
    });
  });
});
