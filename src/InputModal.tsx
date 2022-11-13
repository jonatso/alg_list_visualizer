import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useDisclosure,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import parseInput from "./parseInput";

export default function InputModal({
    setAlgLists,
}: {
    setAlgLists: Dispatch<SetStateAction<{ title: string; algs: string[] }[]>>;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let [value, setValue] = useState("");

    let handleInputChange = (e: any) => {
        let inputValue = e.target.value;
        setValue(inputValue);
    };

    return (
        <>
            <Button onClick={onOpen}>Input alg lists 🤩</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>🤯 Insert alg lists here 🤯</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea
                            value={value}
                            onChange={handleInputChange}
                            size="sm"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="green"
                            onClick={() => {
                                setAlgLists(parseInput(value));
                                setValue("");
                                onClose();
                            }}
                            mr={3}
                        >
                            Save 😎
                        </Button>
                        <Button
                            onClick={() => {
                                setValue("");
                                onClose();
                            }}
                        >
                            Cancel 😔
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
