import React from "react";

function RequestInviteButton({ className }) {
  return (
    <button
      className={`btn text-white px-4 rounded-pill d-none d-lg-block border-0 ${className}`}
    >
      Request Invite
    </button>
  );
}

export default RequestInviteButton;
