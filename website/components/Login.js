"use client";
import { useSession, signOut, signIn, SessionProvider } from "next-auth/react";

function Login() {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (session && session.user) {
    return (
      <main>
        <section className="container forms">
          <div className="form login">
            <div className="form-content">
              <header>
                Logged in as{" "}
                <strong style={{ fontWeight: "bold" }}>
                  {session.user.name}
                </strong>
              </header>

              <div className="field button-field">
                <button onClick={handleLogout}>Log out</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="p-5 rounded-lg bg-white w-fit">
        <div className="p-2 items-center flex flex-col">
          <div className="media-options">
            <a
              href="#"
              className="flex border-[1px] border-[solid] border-[#CACACA] items-center justify-center rounded-lg p-2 w-full mb-2 gap-2"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <img
                src="https://authjs.dev/img/providers/google.svg"
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <span className="font-medium opacity-60 text-[#232836]">Login with Google</span>
            </a>
          </div>
          <div className="relative h-px w-full mx-[0] my-[36px] bg-[#d4d4d4] before:content-['Or'] before:absolute before:top-2/4 before:left-2/4 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#FFF] before:text-[#8b8b8b] before:px-[15px] before:py-[0]"></div>
          <div className="media-options">
            <a
              href="#"
              className="flex border-[1px] border-[solid] border-[#CACACA] items-center justify-center rounded-lg p-2 w-full mb-2 gap-2"
              onClick={() => signIn("facebook", { callbackUrl: "/" })}
            >
              <img
                src="https://authjs.dev/img/providers/facebook.svg"
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <span className="font-medium opacity-60 text-[#232836]">Login with Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function LoginPage() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  );
}
