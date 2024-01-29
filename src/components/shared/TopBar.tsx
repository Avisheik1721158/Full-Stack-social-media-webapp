import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

const TopBar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();
  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/src/assets/images/logo (1).svg"
            alt="logo"
            width={130}
            height={325}
          ></img>
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost" className="shad-button_ghost">
            <img
              src="/src/assets/icons/logout (1).svg"
              alt="logout"
              onClick={() => signOut()}
            />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={user.imageUrl || "'/src/assets/images/profile.png"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            ></img>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
