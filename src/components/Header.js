import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (headerRef.current) {
        if (currentScrollY > prevScrollY.current) {
          // Scrolling down
          headerRef.current.style.transform = "translateY(-200px)";
        } else {
          // Scrolling up
          headerRef.current.style.transform = "translateY(0)";
        }
        prevScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)"
      transition="transform 0.5s ease-in-out"
      backgroundColor="#18181b"
      zIndex={2}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "15px" }}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <Box>
                <a href="#platform-section" onClick={handleClick('platform')}>
                  <p><strong>Platform</strong></p>
                </a>
              </Box>
              <Box>
                <a href="#solutions-section" onClick={handleClick('solutions')}>
                  <p><strong>Solutions</strong></p>
                </a>
              </Box>
              <Box>
                <a href="#pricing-section" onClick={handleClick('pricing')}>
                  <p><strong>Pricing</strong></p>
                </a>
              </Box>
              <Box>
                <a href="#saas-section" onClick={handleClick('saas')}>
                  <p><strong>SaaS</strong></p>
                </a>
              </Box>
              <Box>
                <a href="#contact-sales-section" onClick={handleClick('contact-sales')}>
                  <p><strong>Contact Sales</strong></p>
                </a>
              </Box>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
