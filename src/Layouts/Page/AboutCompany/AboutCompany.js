import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div className="row">
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex mt-5'>
                <General className='col'/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses className='col'/> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;