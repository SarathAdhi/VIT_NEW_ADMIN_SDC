import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const Modal = ({
  title = "",
  isOpen,
  setIsOpen,
  children,
  Footer = null,
}) => {
  return (
    <ChakraModal
      size={"xl"}
      onClose={() => setIsOpen(false)}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent m={2}>
        <ModalHeader color={"#1B39A8"} fontSize={"3xl"}>
          {title}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>

        {Footer && <ModalFooter>{Footer}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
};
