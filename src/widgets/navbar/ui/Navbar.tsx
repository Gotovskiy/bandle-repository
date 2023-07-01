import { classNames } from "shared/lib/helpers/classNames/classNames";
import "./Navbar.module.scss";
import cls from "./Navbar.module.scss";
import { AppLink, ApplinkTheme } from "shared/ui/AppLink/AppLink";

export interface NavbarProps {
  className?: string;
}
export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={"/"}
          theme={ApplinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink to={"/about"} theme={ApplinkTheme.SECONDARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
}
