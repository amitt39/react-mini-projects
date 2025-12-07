import { Avatar } from "./Avatar";
import { Content } from "./Content";
import { Actions } from "./Actions";
import "./ProfileCard.css";
import { DeleteProfileCard } from "./DeleteProfileCard";

export function ProfileCard({ children }) {
  return (
    <>
      <div className="profile-card">{children}</div>
    </>
  );
}

ProfileCard.DeleteProfileCard = DeleteProfileCard;
ProfileCard.Avatar = Avatar;
ProfileCard.Content = Content;
ProfileCard.Actions = Actions;
