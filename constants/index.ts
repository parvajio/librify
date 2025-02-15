export const navigationLinks = [
    {
      href: "/library",
      label: "Library",
    },
  
    {
      img: "/icons/user.svg",
      selectedImg: "/icons/user-fill.svg",
      href: "/my-profile",
      label: "My Profile",
    },
  ];
  
  export const adminSideBarLinks = [
    {
      img: "/icons/admin/home.svg",
      route: "/admin",
      text: "Home",
    },
    {
      img: "/icons/admin/users.svg",
      route: "/admin/users",
      text: "All Users",
    },
    {
      img: "/icons/admin/book.svg",
      route: "/admin/books",
      text: "All Books",
    },
    {
      img: "/icons/admin/bookmark.svg",
      route: "/admin/borrow-records",
      text: "Borrow Records",
    },
    {
      img: "/icons/admin/user.svg",
      route: "/admin/account-requests",
      text: "Account Requests",
    },
  ];
  
  export const FIELD_NAMES = {
    fullName: "Full name",
    email: "Email",
    password: "Password",
    universityId: "University ID Number",
    universityCard: "Upload University ID Card",
  };
  
  export const FIELD_TYPES = {
    fullname: "text",
    email: "email",
    password: "password",
    universityId: "number",
  };
  
 
  
  export const sorts = [
    {
      value: "oldest",
      label: "Oldest",
    },
    {
      value: "newest",
      label: "Newest",
    },
    {
      value: "available",
      label: "Available",
    },
    {
      value: "highestRated",
      label: "Highest Rated",
    },
  ];
  
  export const userRoles = [
    {
      value: "user",
      label: "User",
      bgColor: "bg-[#FDF2FA]",
      textColor: "text-[#C11574]",
    },
    {
      value: "admin",
      label: "Admin",
      bgColor: "bg-[#ECFDF3]",
      textColor: "text-[#027A48]",
    },
  ];
  
  export const borrowStatuses = [
    {
      value: "overdue",
      label: "Overdue",
      bgColor: "bg-[#FFF1F3]",
      textColor: "text-[#C01048]",
    },
    {
      value: "borrowed",
      label: "Borrowed",
      bgColor: "bg-[#F9F5FF]",
      textColor: "text-[#6941C6]",
    },
    {
      value: "returned",
      label: "Returned",
      bgColor: "bg-[#F0F9FF]",
      textColor: "text-[#026AA2]",
    },
  ];