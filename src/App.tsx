// import { useState } from "react";
import {
  Button,
  Card,
  Carousel,
  FormProps,
  Image,
  Menu,
  MenuProps,
  Modal,
} from "antd";
import { services } from "./shared/constants/services";
import { technique } from "./shared/constants/technique";
import { groundImg } from "./shared/constants/ground";
import { officeImg } from "./shared/constants/office";
import { useEffect, useState } from "react";
import { getAnimatedContent } from "./shared/utils/getAnimatedContent";
import { carouselFoto } from "./shared/constants/carouselFoto";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { FieldType } from "./shared/models/models";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <PieChartOutlined />, label: "Option 1" },
  { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
  },
];

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appeal, setAppeal] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const clearForm = () => {
    setAppeal("");
    setName("");
    setTelephone("");
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = {
      userName: name,
      userAppeal: appeal,
      userTelephone: telephone,
    };
    console.log(userMessage);
    clearForm();
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    getAnimatedContent();
  }, []);

  return (
    <>
      <header>
        <Modal
          title="Заявка на обратный звонок"
          open={isModalOpen}
          footer={null}
          centered
          onCancel={() => clearForm()}
        >
          <form onSubmit={handleSubmit} className="flex flex-col" action="">
            <label>
              Тема заявки (не более 60 символов)
              <span className="text-[20px] text-[red]">*</span>
            </label>
            <input
              value={appeal}
              onChange={(e) => setAppeal(e.target.value)}
              placeholder="Заказать погрузчик на 12 часов"
              type="text"
              maxLength={60}
              required
              className="w-[95%] p-1 border-[1px]"
            />
            <label>
              Ваше имя
              <span className="text-[20px] text-[red]">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Максим"
              size={2}
              maxLength={20}
              required
              className="w-[95%] p-1 border-[1px]"
            />
            <label>
              Tелефон
              <span className="text-[20px] text-[red]">*</span>
            </label>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
              placeholder="+79990001122"
              pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
              size={2}
              required
              className="w-[95%] p-1 border-[1px]"
            />
            <button
              type="submit"
              className="w-[50%] h-[25px] border-[1px] mx-[50%] mt-3"
            >
              Отправить
            </button>
          </form>
        </Modal>
        <div className=" container gap-[20px] mx-auto py-5 w-full flex justify-between items-center 2xl:w-[1250px] xl:w-[1024px] lg:w-[768px] md:w-[640px]">
          <div className="w-[256px] sm:hidden">
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              {!collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            {!collapsed && (
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
              />
            )}
          </div>
          <div className="bg-[#f4a51c]  my-2 p-1 rounded-[15px] border-double border-4 border-[black] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-[black] duration-300">
            <img src="src/img/logo.png" alt="Логотип компании" />
          </div>
          <div className="flex flex-row gap-4">
            <a
              className="flex  uppercase flex-row gap-1 items-center border-solid rounded-[10px] border-[1px] border-[0, 0, 0, .1] p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-[black] duration-300"
              href="https://t.me/Maksim13777"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#4DA0DF"></circle>
                <path
                  d="M8.41524 18.3365L12.5535 19.8796L14.1667 25.0699C14.2369 25.4206 14.6577 25.4908 14.9383 25.2804L17.2529 23.3866C17.4633 23.1762 17.814 23.1762 18.0946 23.3866L22.2329 26.4026C22.5134 26.613 22.9343 26.4727 23.0044 26.122L26.0906 11.3926C26.1607 11.0419 25.81 10.6912 25.4593 10.8315L8.41524 17.4247C7.9944 17.5649 7.9944 18.1962 8.41524 18.3365ZM13.9563 19.108L22.0926 14.1281C22.2329 14.0579 22.3732 14.2683 22.2329 14.3385L15.5696 20.581C15.3591 20.7914 15.1487 21.0719 15.1487 21.4226L14.9383 23.106C14.9383 23.3164 14.5876 23.3866 14.5174 23.106L13.6758 20.0198C13.4653 19.6691 13.6056 19.2483 13.9563 19.108Z"
                  fill="white"
                  fillRule="evenodd"
                ></path>
              </svg>
              telegram
            </a>
            <a
              className="flex uppercase flex-row gap-1 items-center border-solid rounded-[10px] border-[1px] border-[0, 0, 0, .1] p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-[black] duration-300"
              href="https://api.whatsapp.com/send/?phone=79278222295"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.998 0H8.002C12.413 0 16 3.589 16 8C16 12.411 12.413 16 8.002 16C6.375 16 4.866 15.516 3.601 14.678L0.526 15.661L1.523 12.689C0.564 11.372 0 9.75 0 8C0 3.588 3.587 0 7.998 0ZM11.087 12.426C11.698 12.294 12.464 11.842 12.657 11.297C12.85 10.751 12.85 10.286 12.794 10.187C12.7488 10.1085 12.6419 10.057 12.4822 9.98012C12.4407 9.96011 12.3955 9.93838 12.347 9.914C12.112 9.797 10.969 9.232 10.753 9.157C10.541 9.077 10.339 9.105 10.179 9.33101C10.1486 9.37362 10.1182 9.41632 10.088 9.45878C9.89498 9.73025 9.70879 9.99211 9.554 10.159C9.413 10.309 9.183 10.328 8.99 10.248C8.96896 10.2392 8.94485 10.2295 8.91783 10.2186C8.61225 10.0952 7.93445 9.82141 7.114 9.091C6.422 8.475 5.952 7.708 5.816 7.478C5.68248 7.24728 5.79765 7.11198 5.9041 6.98694C5.90607 6.98462 5.90804 6.98231 5.91 6.98C5.97863 6.89509 6.04523 6.82438 6.11217 6.75332C6.16031 6.7022 6.20863 6.6509 6.258 6.594C6.26534 6.58555 6.27247 6.57735 6.27942 6.56937C6.38424 6.44884 6.44666 6.37706 6.517 6.227C6.597 6.072 6.54 5.912 6.483 5.794C6.44379 5.71137 6.20153 5.12359 5.99356 4.61901C5.90456 4.40307 5.82184 4.20236 5.764 4.063C5.609 3.692 5.491 3.678 5.256 3.668C5.2488 3.66764 5.24153 3.66728 5.23418 3.6669C5.1599 3.66314 5.07809 3.659 4.988 3.659C4.682 3.659 4.363 3.749 4.17 3.946C4.16326 3.95289 4.15623 3.96004 4.14893 3.96746C3.90202 4.21857 3.352 4.77795 3.352 5.893C3.352 7.01021 4.14471 8.09144 4.29138 8.29149C4.29542 8.297 4.29897 8.30185 4.302 8.306C4.31083 8.3176 4.32746 8.34168 4.35167 8.37674C4.65115 8.81044 6.10983 10.9229 8.285 11.824C10.123 12.586 10.669 12.515 11.087 12.426Z"
                  fill="#2BB666"
                ></path>
              </svg>
              whatsapp
            </a>
          </div>
          <button
            onClick={showModal}
            className="border-solid rounded-[10px] border-2 bg-[#f4a51c] p-2 text-[white] text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[black] animate-bounce duration-300"
          >
            Заказать звонок
          </button>
        </div>
      </header>
      <section>
        <nav className="container relative z-50 h-[28px] 2xl:w-[1250px] xl:w-[1024px] lg:w-[768px] md:w-[640px] mx-auto w-full">
          <ul className="relative flex justify-between text-white text-[14px] text-center items-center list-none">
            <li className="w-full relative">
              <a
                className="text-center uppercase px-5 py-5 bg-[black] border-r-[1px] border-[1px solid (255, 255, 255, 0.2)] transition delay-150 hover:text-[#f4a51c] duration-300 block"
                href="#technique"
              >
                спецтехника
              </a>
            </li>
            <li className="w-full relative">
              <a
                className="text-center uppercase px-5 py-5 bg-[black] border-r-[1px] border-[1px solid (255, 255, 255, 0.2)] transition delay-150 hover:text-[#f4a51c] duration-300 block"
                href="#ground"
              >
                площадка
              </a>
            </li>

            <li className="w-full relative">
              <a
                className="text-center uppercase px-5 py-5 bg-[black] border-r-[1px] border-[1px solid (255, 255, 255, 0.2)] transition delay-150 hover:text-[#f4a51c] duration-300 block"
                href="#hangar"
              >
                ангары
              </a>
            </li>
            <li className="w-full relative">
              <a
                className="text-center uppercase px-5 py-5 bg-[black] border-r-[1px] border-[1px solid (255, 255, 255, 0.2)] transition delay-150 hover:text-[#f4a51c] duration-300 block"
                href="#office"
              >
                офисы
              </a>
            </li>
            <li className="w-full relative">
              <a
                className="text-center uppercase px-5 py-5 bg-[black] border-r-[1px] border-[1px solid (255, 255, 255, 0.2)] transition delay-150 hover:text-[#f4a51c] duration-300 block"
                href="#our_technology"
              >
                фото
              </a>
            </li>
            <li className="w-full relative">
              <a
                className="text-center uppercase px-5 py-5 bg-[black] transition delay-150 hover:text-[#f4a51c] duration-300 block"
                href="#contacts"
              >
                контакты
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <main>
        <section className="bg-[url(src/img/fon1.jpg)] bg-no-repeat mx-auto py-5 bg-[cover] flex  h-[600px] 2xl:h-[950px] xl:h-[850px] lg:h-[550px] md:h-[450px]">
          <div className="mt-[60px] text-center container 2xl:w-[1250px] xl:w-[1024px] lg:w-[768px] md:w-[640px]">
            <h1 className="text-6xl uppercase font-bold text-[#f4a51c] mb-10 font-serif animated-content _anim-no-hide">
              аренда спецтехники
            </h1>
            <p className="text-3xl font-bold uppercase font-heading text-[#ffffff] mb-40 mx-5 animated-content _anim-no-hide">
              предоставляем технику в течении 24 часов и доставляем до объекта
              на нашем транспорте
            </p>

            <ul className="relative flex flex-wrap justify-center gap-5 rounded-lg p-[10px]">
              {services.map((serv, index) => (
                <li key={index}>
                  <div className="flex flex-col w-[270px] items-center bg-[white] p-2 rounded-2xl opacity-90 keyframes animate-pulse animated-content">
                    <img
                      className="h-[100px] w-[100px]"
                      src={serv.icon}
                      alt={serv.title}
                    />
                    <h3 className="text-2xl font-bold font-heading">
                      {serv.title}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-8xl font-medium font-heading bg-[white] opacity-90 p-2 rounded-2xl  mt-10 mx-5">
              +7-999-114-69-88
            </div>
          </div>
        </section>
        <section id="technique" className="container mb-9">
          <div>
            <h2 className="font-serif font-medium text-6xl mb-9 mt-9 text-[#f4a51c] animated-content _anim-no-hide">
              СПЕЦТЕХНИКА
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {technique.map(({ title, description, img, price }, key) => (
                <Card
                  className="p-1 w-[300px] animated-content _anim-no-hide items-stretch"
                  key={key}
                  cover={
                    <Image
                      width="auto"
                      height="300px"
                      src={img}
                      title={title}
                    />
                  }
                >
                  <div className="font-thin grid grid-rows-7">
                    <div className="border-b-2 font-medium text-center">
                      {title}
                    </div>
                    <div
                      className="border-b-2"
                      style={{
                        display: `${
                          description.bucketVolume === 0 ? "none" : "block"
                        }`,
                      }}
                    >
                      Объем ковша: {description.bucketVolume} м<sup>3</sup>
                    </div>
                    <div
                      className="border-b-2"
                      style={{
                        display: `${
                          description.maxDepth === 0 ? "none" : "block"
                        }`,
                      }}
                    >
                      Максимальная глубина <br />
                      копания: {description.maxDepth} м
                    </div>
                    <div
                      className="border-b-2"
                      style={{
                        display: `${
                          description.weight === 0 ? "none" : "block"
                        }`,
                      }}
                    >
                      Эксплуатационная масса: {description.weight} тн
                    </div>
                    <div
                      className="border-b-2"
                      style={{
                        display: `${
                          description.loadCapacityAuto === 0 ? "none" : "block"
                        }`,
                      }}
                    >
                      Грузоподъемность автомобиля:{" "}
                      {description.loadCapacityAuto} тн
                    </div>
                    <div
                      className="border-b-2"
                      style={{
                        display: `${
                          description.loadCapacityArrow === 0 ? "none" : "block"
                        }`,
                      }}
                    >
                      Грузоподъемность стрелы: {description.loadCapacityArrow}{" "}
                      тн
                    </div>
                    <div
                      className="border-b-2"
                      style={{
                        display: `${
                          description.boomReach === 0 ? "none" : "block"
                        }`,
                      }}
                    >
                      Вылет стрелы: {description.boomReach} м
                    </div>
                    <div
                      className="border-b-2"
                      style={{
                        display: `${
                          description.sideLength === 0 ? "none" : "block"
                        }`,
                      }}
                    >
                      Длина борта: {description.sideLength} м
                    </div>
                    <div
                      className="font-medium border-b-2"
                      style={{
                        display: `${price === 0 ? "none" : "block"}`,
                      }}
                    >
                      От {price} ₽/ час
                    </div>
                    <button
                      onClick={() => {
                        showModal();
                        setAppeal(`Заказать ${title}`);
                      }}
                      className="bg-[#f4a51c] font-medium w-[100%] my-2 p-2 rounded-[10px] border-[black] border-[1px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[green] duration-300 hover:text-[white]"
                    >
                      Заказать
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="ground" className="container mb-9">
          <div>
            <h2 className="font-serif font-medium text-6xl mb-9 mt-9 text-[#f4a51c] animated-content _anim-no-hide">
              АРЕНДА ОТКРЫТЫХ ПЛОЩАДОК
            </h2>
            <p className="font-sans font-normal text-2xl mb-9 animated-content">
              Ищете безопасное и удобное место для вашего бизнеса? <br />
              Мы предлагаем вам уникальную возможность арендовать открытую
              охраняемую территорию по привлекательной цене всего{" "}
              <b>
                350 руб. за м<sup>2</sup>
              </b>
            </p>
          </div>
          <Image.PreviewGroup items={groundImg}>
            <Image width="auto" src="src/img/plosh5.jpg" />
          </Image.PreviewGroup>
        </section>
        <section id="hangar" className="container mt-10">
          <div>
            <h2 className="font-serif font-medium text-6xl mb-9 text-[#f4a51c] animated-content _anim-no-hide">
              АРЕНДА АНГАРА
            </h2>
            <p className="font-sans font-normal text-2xl mb-9 animated-content">
              Мы предлагаем аренду ангара, который идеально подходит для
              хранения, производства и реализации ваших идей.
            </p>
          </div>
          <Image.PreviewGroup>
            <Image width="auto" src="src/img/plosh3.jpg" />
          </Image.PreviewGroup>
        </section>
        <section id="office" className="container mt-10">
          <div>
            <h2 className="font-serif font-medium text-6xl mb-9 text-[#f4a51c] animated-content _anim-no-hide">
              АРЕНДА ОФИСНЫХ ПОМЕЩЕНИЙ
            </h2>
            <p className="font-sans font-normal text-2xl mb-9 animated-content">
              Ищете идеальное место для вашего бизнеса? <br />У нас есть
              отличное предложение — офисные помещения всего за{" "}
              <b>
                500 руб. за м<sup>2</sup>!
              </b>
            </p>
          </div>
          <Image.PreviewGroup items={officeImg}>
            <Image width="auto" src="src/img/ofic3.jpeg" />
          </Image.PreviewGroup>
        </section>
        <section id="our_technology" className="container mt-10">
          <h2 className="font-serif font-medium text-6xl mb-9 text-[#f4a51c] animated-content _anim-no-hide">
            НАША ТЕХНИКА В ДЕЛЕ
          </h2>
          <Carousel
            autoplay={true}
            draggable={true}
            infinite={true}
            waitForAnimate={true}
            adaptiveHeight={true}
            dots={{ className: "react-multi-carousel-dot-list" }}
          >
            {carouselFoto.map((foto, index) => (
              <img className="h-[700px]" key={index} src={foto} />
            ))}
          </Carousel>
        </section>
      </main>
      <footer id="contacts" className="my-10">
        <div className="container">
          <h2 className="font-serif font-medium text-6xl mb-9 text-[#f4a51c] animated-content _anim-no-hide">
            СВЯЗАТЬСЯ С НАМИ
          </h2>
        </div>
        <div className="absolute mt-10 ml-10">
          <ul className="bg-[black] opacity-70 rounded-xl w-[500px] h-[220px] pt-4 px-4">
            <li>
              <span className="flex justify-end items-center gap-5">
                <a href="https://api.whatsapp.com/send/?phone=79278222295">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.998 0H8.002C12.413 0 16 3.589 16 8C16 12.411 12.413 16 8.002 16C6.375 16 4.866 15.516 3.601 14.678L0.526 15.661L1.523 12.689C0.564 11.372 0 9.75 0 8C0 3.588 3.587 0 7.998 0ZM11.087 12.426C11.698 12.294 12.464 11.842 12.657 11.297C12.85 10.751 12.85 10.286 12.794 10.187C12.7488 10.1085 12.6419 10.057 12.4822 9.98012C12.4407 9.96011 12.3955 9.93838 12.347 9.914C12.112 9.797 10.969 9.232 10.753 9.157C10.541 9.077 10.339 9.105 10.179 9.33101C10.1486 9.37362 10.1182 9.41632 10.088 9.45878C9.89498 9.73025 9.70879 9.99211 9.554 10.159C9.413 10.309 9.183 10.328 8.99 10.248C8.96896 10.2392 8.94485 10.2295 8.91783 10.2186C8.61225 10.0952 7.93445 9.82141 7.114 9.091C6.422 8.475 5.952 7.708 5.816 7.478C5.68248 7.24728 5.79765 7.11198 5.9041 6.98694C5.90607 6.98462 5.90804 6.98231 5.91 6.98C5.97863 6.89509 6.04523 6.82438 6.11217 6.75332C6.16031 6.7022 6.20863 6.6509 6.258 6.594C6.26534 6.58555 6.27247 6.57735 6.27942 6.56937C6.38424 6.44884 6.44666 6.37706 6.517 6.227C6.597 6.072 6.54 5.912 6.483 5.794C6.44379 5.71137 6.20153 5.12359 5.99356 4.61901C5.90456 4.40307 5.82184 4.20236 5.764 4.063C5.609 3.692 5.491 3.678 5.256 3.668C5.2488 3.66764 5.24153 3.66728 5.23418 3.6669C5.1599 3.66314 5.07809 3.659 4.988 3.659C4.682 3.659 4.363 3.749 4.17 3.946C4.16326 3.95289 4.15623 3.96004 4.14893 3.96746C3.90202 4.21857 3.352 4.77795 3.352 5.893C3.352 7.01021 4.14471 8.09144 4.29138 8.29149C4.29542 8.297 4.29897 8.30185 4.302 8.306C4.31083 8.3176 4.32746 8.34168 4.35167 8.37674C4.65115 8.81044 6.10983 10.9229 8.285 11.824C10.123 12.586 10.669 12.515 11.087 12.426Z"
                      fill="#2BB666"
                    ></path>
                  </svg>
                </a>
                <a href="https://t.me/Maksim13777">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="18" cy="18" r="18" fill="#4DA0DF"></circle>
                    <path
                      d="M8.41524 18.3365L12.5535 19.8796L14.1667 25.0699C14.2369 25.4206 14.6577 25.4908 14.9383 25.2804L17.2529 23.3866C17.4633 23.1762 17.814 23.1762 18.0946 23.3866L22.2329 26.4026C22.5134 26.613 22.9343 26.4727 23.0044 26.122L26.0906 11.3926C26.1607 11.0419 25.81 10.6912 25.4593 10.8315L8.41524 17.4247C7.9944 17.5649 7.9944 18.1962 8.41524 18.3365ZM13.9563 19.108L22.0926 14.1281C22.2329 14.0579 22.3732 14.2683 22.2329 14.3385L15.5696 20.581C15.3591 20.7914 15.1487 21.0719 15.1487 21.4226L14.9383 23.106C14.9383 23.3164 14.5876 23.3866 14.5174 23.106L13.6758 20.0198C13.4653 19.6691 13.6056 19.2483 13.9563 19.108Z"
                      fill="white"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  className="text-[white] font-medium text-[30px]"
                  href="tel:8999146988"
                >
                  +7-999-114-69-88
                </a>
              </span>
            </li>
            <li>
              <span className="flex justify-end items-center gap-5">
                <a
                  className="text-[white] font-medium text-[30px]"
                  href="mailto:znakpark@yandex.ru"
                >
                  znakpark@yandex.ru
                </a>
              </span>
            </li>
            <li className="text-[white] font-medium text-[16px] flex justify-end items-center gap-5">
              141402, Московская обл., г. Химки, ул. Ленинградская, д. 29, этаж
              9, пом. 14, оф. 914/2.
            </li>
            <li className="flex justify-end items-center gap-5"></li>
          </ul>
          <button
            onClick={showModal}
            className="border-solid rounded-[10px] border-2 bg-[#f4a51c] p-2 text-[white] text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[black] absolute mt-[-60px] ml-[300px]"
          >
            Заказать звонок
          </button>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6b3e232e3a5e51fd832adf32792dcfe02130d4052818ebb79d298525583fb3af&amp;source=constructor"
          width="100%"
          height="400"
        ></iframe>
      </footer>
    </>
  );
}

export default App;
