import HeaderCSS from "./Header.module.css"
export function Header() {
    return (
            <div className={HeaderCSS["header"]}>
                <h1 className={HeaderCSS["questify-title"]}>Questify</h1>
            </div>
    )
}