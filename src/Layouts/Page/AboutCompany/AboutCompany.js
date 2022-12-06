import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div class="row" className="d-flex-item">
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex mt-5'>
                <General class='col'/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses class='col'/> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;