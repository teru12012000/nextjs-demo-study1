"use client"

import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@yamada-ui/react"

import ja from "@/shared/i18n/ja"

interface props {
    buttonTitle: string
    modalHeader: string
    modalBody: string
}

const ExplanationModal = (props: props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Button onClick={onOpen}>{props.buttonTitle}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalHeader>{props.modalHeader}</ModalHeader>
                <ModalBody>{props.modalBody}</ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onClick={onClose}>
                        {ja.explanationModal.closeButton}
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ExplanationModal
