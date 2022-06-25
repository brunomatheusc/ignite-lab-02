import { Link } from "react-router-dom";
import RocketseatLogo from "./RocketseatLogo";

export default function Footer() {
    return (
        <div className="flex flex-col items-center sm:flex-row sm:items-start mx-6 py-6 justify-between border-t border-gray-500">
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <RocketseatLogo />

                <h1 className="text-gray-300">Rocketseat - Todos os direitos reservados</h1>
            </div>

            <div className="mt-6 sm:mt-0">
                <Link to="/privacy-policies" className="text-gray-300">Políticas de privacidade</Link>
            </div>
        </div>
    )
}
