import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, Stack } from "react-bootstrap";
import "../styles/service.scss";

function Item({
  icon,
  title,
  itemType,
}: {
  icon: any;
  title: string;
  itemType: string;
}) {
  if (itemType === "white") {
    return (
      <div className="bg-white shadow service__item mt-2 mx-xxl-5 rounded w-100 p-lg-4 p-xl-4 p-xxl-4 p-md-2">
        <div className="service__icon m-auto">{icon}</div>
        <strong className="white d-block my-2 fs-5 mt-3">{title}</strong>
      </div>
    );
  } else {
    return (
      <div className="blue text-white service__item mt-2 mx-xxl-5 rounded w-100 p-lg-4 p-xl-4 p-xxl-4 p-md-2">
        <div className="service__icon m-auto">{icon}</div>
        <strong className="d-block my-2 fs-5 mt-3">{title}</strong>
      </div>
    );
  }
}

function Service() {
  return (
    <>
      <div id="service" className="mt-5">
        <Container className="service p-5">
          <h1 className="service__header text-center fw-bold">Services</h1>
          <Stack
            direction="horizontal"
            gap={5}
            className="mt-5 service__row text-center"
          >
            <Item
              icon={
                <Icon
                  className="border-bottom border-3"
                  width="50"
                  height="110"
                  icon="mdi:farm-house"
                />
              }
              title={"Construction"}
              itemType={"white"}
            />
            <Item
              icon={
                <Icon
                  className="border-bottom border-white border-3"
                  width="50"
                  height="110"
                  icon="icon-park-solid:connect"
                />
              }
              title={"Renovation"}
              itemType={"blue"}
            />

            <Item
              icon={
                <Icon
                  className="border-bottom border-3"
                  width="50"
                  height="110"
                  icon="mdi:handshake"
                />
              }
              title={"Consultation"}
              itemType={"white"}
            />
          </Stack>

          <Stack
            direction="horizontal"
            gap={5}
            className="mt-5 service__row text-center"
          >
            <Item
              icon={
                <Icon
                  className="border-bottom border-white border-3"
                  width="50"
                  height="110"
                  icon="ic:baseline-home-repair-service"
                />
              }
              title={"Repair Services"}
              itemType={"blue"}
            />

            <Item
              icon={
                <Icon
                  className="border-bottom border-3"
                  width="50"
                  height="110"
                  icon="mdi:math-compass"
                />
              }
              title={"Architecture"}
              itemType={"white"}
            />

            <Item
              icon={
                <Icon
                  className="border-bottom border-white border-3"
                  width="50"
                  height="110"
                  icon="ic:baseline-electrical-services"
                />
              }
              title={"Electric"}
              itemType={"blue"}
            />
          </Stack>

          <Stack
            direction="vertical"
            gap={5}
            className="mt-5 service__vertical text-center"
          >
            <Item
              icon={
                <Icon
                  className="border-bottom border-3"
                  width="50"
                  height="110"
                  icon="mdi:farm-house"
                />
              }
              title={"Construction"}
              itemType={"white"}
            />
            <Item
              icon={
                <Icon
                  className="border-bottom border-white border-3"
                  width="50"
                  height="110"
                  icon="icon-park-solid:connect"
                />
              }
              title={"Renovation"}
              itemType={"blue"}
            />

            <Item
              icon={
                <Icon
                  className="border-bottom border-3"
                  width="50"
                  height="110"
                  icon="mdi:handshake"
                />
              }
              title={"Consultation"}
              itemType={"white"}
            />
          </Stack>

          <Stack
            direction="vertical"
            gap={5}
            className="mt-5 service__vertical text-center"
          >
            <Item
              icon={
                <Icon
                  className="border-bottom border-white border-3"
                  width="50"
                  height="110"
                  icon="ic:baseline-home-repair-service"
                />
              }
              title={"Repair Services"}
              itemType={"blue"}
            />

            <Item
              icon={
                <Icon
                  className="border-bottom border-3"
                  width="50"
                  height="110"
                  icon="mdi:math-compass"
                />
              }
              title={"Architecture"}
              itemType={"white"}
            />

            <Item
              icon={
                <Icon
                  className="border-bottom border-white border-3"
                  width="50"
                  height="110"
                  icon="ic:baseline-electrical-services"
                />
              }
              title={"Electric"}
              itemType={"blue"}
            />
          </Stack>
        </Container>
      </div>
    </>
  );
}

export default Service;
