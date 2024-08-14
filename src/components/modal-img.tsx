"use client"
import { Image, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react"

export default function ModalImg({ img }: { img: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    return (
        <>
            <Image onClick={onOpen} src={img} className='w-40 h-20 object-cover cursor-pointer' isZoomed />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl' placement='center' backdrop='blur'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <Image src={img} className='object-cover px-6' />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
