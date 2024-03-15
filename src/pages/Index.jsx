import { useState } from "react";
import { Box, IconButton, Image, Flex, Heading } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Index = () => {
  const slides = ["https://picsum.photos/id/1018/1000/600/", "https://picsum.photos/id/1015/1000/600/", "https://picsum.photos/id/1019/1000/600/"];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    setDirection("right");
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    setDirection("left");
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Heading mb={8}>Image Carousel</Heading>
      <Box position="relative" w="full" overflow="hidden">
        {slides.map((slide, index) => (
          <Image key={slide} src={slide} position="absolute" w="full" transition="transform 0.5s" transform={`translateX(${(index - currentSlide) * 100}%)`} zIndex={index === currentSlide ? 1 : 0} />
        ))}
        <IconButton aria-label="Previous Slide" icon={<FaChevronLeft />} position="absolute" top="50%" left={2} transform="translateY(-50%)" zIndex={2} onClick={prevSlide} />
        <IconButton aria-label="Next Slide" icon={<FaChevronRight />} position="absolute" top="50%" right={2} transform="translateY(-50%)" zIndex={2} onClick={nextSlide} />
      </Box>
    </Flex>
  );
};

export default Index;
