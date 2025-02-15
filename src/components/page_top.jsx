import useUserStore from "../store/userStore";

const Page_top = () => {
  const { user } = useUserStore();

  const firstLetter = user?.firstname
    ? user.firstname.charAt(0).toUpperCase()
    : "";

  return (
    <div className="notnm">
      <img src="/Notification.svg" alt="" />
      <p>{user ? `${firstLetter}.${user.lastname}` : "Account"}</p>
    </div>
  );
};

export default Page_top;
