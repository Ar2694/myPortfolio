import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "components/shared/PageContainer/theme";

export default function PageContainer(props) {
    return (
        <ThemeProvider theme={theme}>
            <Container className="page-container" disableGutters={true}>
                <CssBaseline />
                <Container className={props.className} maxWidth="lg">
                    {props.children}
                </Container>
            </Container>
        </ThemeProvider>
    )
}
