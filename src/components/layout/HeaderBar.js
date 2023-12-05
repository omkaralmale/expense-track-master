import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../auth/Store/ContextAPI";
import { useNavigate } from "react-router-dom";

const HeaderBar = () => {
  const history = useNavigate();
  const context = useContext(AuthContext);
  // console.log(AuthContext);
  // console.log(context);
  const handleLogOut = () => {
    // console.log(context);
    // console.log(context.logout);
    context.logout();
    history("/login");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed>
      <Container fluid>
        <Navbar.Brand href="/home">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDw8NDQ0QDhINFRMSDxANDQ8OEBUQGB0XFhUSGBYYHSggGBsmJxMWITEhJSktOjo6FyAzRDM4NyguLisBCgoKDQ0OGhAQGi0dIB8wNy8tKystLS4uLS0rNy8rKy03NysvKysrNS0uKysrKy0rKystMC4rLSstKysrKystK//AABEIAMgAyAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAYHBQj/xAA+EAACAgACBAkJBgYDAAAAAAAAAQIDBBEFMVFxBhITITJBUmGRFBYiI0JTk7HRM3KBocHwFVRVYtLhB5Lx/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwQFBgf/xAAyEQEAAQMBBQUGBwEBAAAAAAAAAQIDEQQSITFBUQUTFXGhIlKB0eHwFDJCU2GRwbGS/9oADAMBAAIRAxEAPwDtmKxMKYSttkoRgs5Nhju3aLVM11ziIc/01wzutbhhvUw7XNyj78/Z/DxKTLyus7bu3J2bPsx6/T73tbuxE7HnZZKb2zk5P8yHGruV1zmqZnzlbzChmAzAZgMwGYDMBmAzAjMBmAzAZgMwGYDMkMwGYDMC7TibK3nXZOD2wm4v8gvRdronNMzHlLZdCcM7amoYr10NXGyXKR7/AO78fEnLs6Ptu7bnZve1HXnHzb/hsRC6EbK5KcZrOMlqaLPV27lNymK6JzEuf8PNLO27yaD9CjpZddnX4avErLynbesm5d7mnhT/AN+jViHDAAAAAAAAAAAAJAAAAAAAAYAYAYAYAYG18AtLOq7yWb9C7oZ+zZ/vLLwJh3exNXNFzuauFXDz+rWMVa7LJ2PXOUpPe3mQ4tyqa65qnnOVsYUBgCcAMAAAAAAAAAAgAAAAAAAASAAABewVzrtrsWuE4yX4NMMtmuaLlNUcphaYY0BAAAAAAAAAAAAAAAAAE4AYAYAYAYAYAYAYFVXSjvQWp4wpYwgGEAAYAAAJAAAAAAAAAAAAAAAAAJACAK6ulHegtTxhSwhAQASEoAAAAAAAAAAAAAAJAAAAAAAwAwKqulHegmnjCljCAYAYAYAYAAAAEgBs/AzQCxUpXXxzqhnFLnXGm93Us8/ArM4dnsns+NRVNdyPZj1n6I4R8ErMNnbRnbVra1zgu/au8RJr+yK7Ga7ftU+sNahFyaUU23zJJZtvYWceImZxDduDnAzVdjV3xpz/ADm18v8AwpMvSaDsX9eo/wDPz+TX+E2hpYK5xWbrnm6pPZ2X3r6FonLk9oaKdLdx+meE/wCfB5BLQAAAAAAAAAFVXSjvQWp4wpYVAAAATgBgBgBgAMrRmBniroUV65vX1Jdcn3IidzPp7FV+5Funm67gMHDD1QprWUa1ktr2t971mJ72xZps24t08IeNpDT0rJvC6PirrdU7NdVfe31v98+otEdXPv6+quvudLG1VznlH3954L2guDteEztllbdLNysaSSb1qK6iJnLJouzren9ufarnjPy6PbIdFgab0XDGUypnzPXCXXGfUyYnDV1mlo1NqaKvhPSXJcZhZ0WTqsjxZQeTX67jK8JdtVWq5orjEwsBjAAAkAAAABXV0o70FqeMKWEICAAAAAAAADonBTR9ej8M8XiWq5WpNuWuNetR3vXluMdU5nEPWdmaejSWJv3pxM+kdPil3YjSzcauNhcJqlY+ay1daWxfvn1DdSnb1HaE4ozRb686vv7zwe/gsHTg61CtRritbbSbe1t62V3y6lmzZ01GzT7MMqE1JZxaafWnmiGeJiYzCoJANY4a6B8pr8oqj62pc6WucNm9dRemcON2voO/o7yiPap9Yc2Mrx4AAAAAAABVV0o70FqeMKWEAQAAAAAEpyex+AMSzdEOuNsZ2wdvEacKYrN2T9mO7b/siWxpdiLkVVxtY4R1nlHzb3g9CW4uaxOk3nlz14ZfZwX92193jsMczEboentaG7qKou6v4U8o8/vze1pbHRweHnc0sq1lGK5s5aoxKxGZdDU36dPZmueXCP8AkOTaR0jbipuy6bk3qWfoxWxLqRniMPDajUXL9e1cnP8Ai7ofS1uDsU6pPLP0oN+jJbGv1E0xK+l1d3TV7VE+ccpdawOKjfVC6HRsipL6b+owTGHurN2m7biunhK+QyolJRTbaSXO23kktoRMxEZlyfhNyE8TZPB5yg+eeUfQ4/Xxe4z05xveH7Q7mq/NVjfHPpn+HkFmgAAAAASAFVXSjvRC1PGFLCoSAAAAA6RozRfkGDV1OHWIxElGUu16WWaT6ks+rYYJnMvX6fS/hNNFy3Rt1zj1+THxGndJSjKMNHShJrJS4spZd+ROzT1Ya9d2hNMxTZxPXe8rRHlmFlK3+Gzutm23bbGyUufZsLTszzaWl/F2Kpr7maqp5znL1vOHSP8ATJf9LSuzT1b3iGv/AGPSXmaexmPxtSpngLIJSUs4V2NvJNZc+8tTFMc2nrb2t1VuKKrUxvzuiXgfwTF/yl/wZ/QvtR1cv8Dqf26v6k/guL/lL/g2fQbUdT8Fqf26v6lsOh9KY/CUxojo+yag3k5U3Z87zy5l3lJppmc5dXS6rW6e1FuLMzj+JZvnNpD+mT+Df9CNinq2PE9d+xP9VPN0lpLH4mcOVwVvJQabojTcoTy7Tyze4mIpjm1NRqdbfqjbtTsx+nE4nzehTwlxkMorRclFaowquhzd3N+hGxT1bVHaWrp3dxu/iJj/AA0xTh9I4GeOprVdlWbk0knmsuNGWXS5nmnuEZpqxJq6LGs0s6iiNmqP84xPVoZleZCQAAAAFVXSjvQTTxhDCEAAAAAB2zCfZ1/dj8kasvotv8keS6QuAAAAAAAAAAHINBcIeRwuIwVq9C6MnXJa42NJZPueS/erdrt5nah46zq9jT3LMxuqjd5vNIw5AAAAAAFVXSjvQWp4wpYVAAAASAHbMJ9nX92PyRpzxfRbf5I8l0hcAAAAAAAAAAPn06TwLIou9l/gVmGKujnDIK4YgYAAAArq6Ud6CaeMKWEIAAAAADtuE+zr+7H5I0p4votr8keS6QuAAAAAAAAAAHz6dJ4EAyaLfZf4MrMMVdHOF8hiAAACurpR3oLU8YUsKoAAAAADtuE+zr+7H5I0Z4votv8AJHkukLgAAAAAAAAAB8+nSeBAAGTRbnzPWRhiroxvheDGAAK6ulHeiE08YUslCAAAAAA7dhPs6/ux+SOfPF9Et/kjyXSFwAAAAAAAAAA+fTpPAgAABlU258z1hhrpxvhdCgBXV0o70JTTxhSwhAAAAAAdtwb9XX92PyRzp4volr8lPkvELgAAAAAAAAA2B8+nSeBAAACUBlU28bmeslhqpwuBRVV0o70JTTxhSxhAAJAAAA3fg3wzrqqjRi1JcksoWRXGzitSa15rUatyxMzml6Ps/tiiiiLd7lwl63n3gPez+DP6GLua3S8W0vWf6lPn1gPez+DZ9B3NZ4rpevpJ59YD3s/g2fQdzWeK6Xr6SefWj/fS+DZ9B3NafFdL73pKfPnR/vpfBs+g7ms8V0vveknnzo/38vg2/QdzX0PFdL73pJ586P8Afy+Db9B3NfQ8V0vvekp8+NH+/l8G3/EdzX0PFdL73pJ58aP/AJh/Bt/xHc19E+K6X3vSfk8ThLw7qlVOnBcaUrE4u2UXBRi+Z5J87ZkosTnNTS1na1E0TRa3zPNzs2XngAAAASnkBlVWcbeWhhqpwvVdKO9CYRTxhSyUIGEAwAAAAAw7I5Noq2KZzCkhIAAAAAAAAAAAAAAAAlPLnRJMZZuGs4zjvRbjDFs4qhLJUQEAAJAAACziY9ewiqF7c8mOUZQAAAAAAAAAAAAAAAAArqk1JNa80E4ZbMzWAAAYAYAYAYESWayGCJww2jE2EEAAAAAAAAAAAAAAAAAqr6S3oJjizGZ2sAAIAkCAAEgY2Ijk89pjrjey0TuWii4AAAAAAAAAAAAAAAAqr6S3oJji9DF1Ouyyt665Si96bX6GenfGWG5RNFc0zynC0ThQGAJwAwAAABRbHNFaozC1M4limBmAAAAAAAAAAAAAAAAGRo+l23VVx12ThFb20iJnEZZLVM1VxTHOW5f8gaHdV3lUF6u/p5ezZ/vLPxGluZp2Z4w3+2dJNFzvqeFXHz+rUjbcQAAAAAAAAxLI5No16oxLPTOYUlUgAAAAAAAAAAAAAAG6f8b6Edt3lk4+rozVeftWvm/LPxyMF+vEYdnsjSzXc72eFPDz+jpWKw8LoSqtipwmspRepo1aappnMPRXLdNymaaozEueac4D3VNzwnroa+I2lZHu2S/fMdG1q6Z3VbnmNX2Lconas+1HTn9WsX4O2t5WVWQeycJRf5o2YqpnhLkV2blE4qpmPgtcnLsvwZbcpsz0OTl2X4MbjZnocnLsvwY3GzV0OTl2X4MbjZq6HJy7L8GNxsz0OTl2X4MbjZnos4mp5cbitZa+ZmK5HNeiJhjGFdOQScV7H4AwnivY/AGJOI9j8GDEp5OXZfgwYk5OXZfgwYk5OXZfgwYk5OXZfgwYk5OXZfgwYk5OXZfgwYk5OXZfgwYldowVtr4tdNk3shXKT/JCZiOK9NquqcUxM/BtmgOAN1rU8Z6mvXxE07Zd2yPz7jBXfiODq6Xsi5XObvsx05/R0rC4aFMI1VQUIQWUYx1JGrMzM5l6OiimimKaYxEP/9k="
            alt="logo"
            width="30px"
          />{" "}
          EXPENSE-TRACKER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/aboutUS">About US</Nav.Link>
            <Button variant="" onClick={handleLogOut}>
              LogOut
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
