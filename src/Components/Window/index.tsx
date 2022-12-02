import { Container } from "@mui/material";
import "./style.scss";
type Props = {
    children?: React.ReactNode;
    className?: string;
};
export default function Window({ children = null, className = "" }: Props) {
    return (
        <Container className={["Window", className].join(" ")}>
            <div className={"Menu"}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {children}
        </Container>
    );
}
