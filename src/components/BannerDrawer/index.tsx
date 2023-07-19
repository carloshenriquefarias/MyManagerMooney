// import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, 
//   DrawerOverlay, FormControl, FormLabel, Stack, Switch, VStack } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";
// import { Button } from "../Form/Button";
// import Dropzone from "../Form/Dropzone";
// import { Input } from "../Form/Input";
// import { useEffect, useState } from "react";

// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from 'yup';
// import api from "../../services/api";

// import { useAuth } from "../../context/AuthContext";

// import { Center, Image } from '@chakra-ui/react';
// import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { RiUploadLine } from 'react-icons/ri';
// import { useAppToast } from "../../context/ToastContext";
// interface BannerDrawerProps {
//   isVisible: boolean;
//   onClose: () => void;
//   onCreateNewBanner: () => void;
//   isLoading: boolean;
// }

// type titleBannerProps = {
//   title: string;
// }

// const titleBannerFormSchema = yup.object().shape({
//   title: yup.string().required('Digite o título do banner')
// })

// export default function BannerDrawer({ isLoading, isVisible, onClose, onCreateNewBanner }: BannerDrawerProps) {

//   const { register, handleSubmit, formState } = useForm<titleBannerProps>({
//     resolver: yupResolver(titleBannerFormSchema)
//   });
//   const { user } = useAuth();
//   const { toast } = useAppToast();
//   const { errors } = formState

//   const [isBannerVisible, setIsBannerVisible] = useState(false);
//   const [title, setTitle] = useState<string>('');
//   const [selectedImage, setSelectedImage] = React.useState('');
  
//   function handleSwitchChange(){
//     setIsBannerVisible(!isBannerVisible);
//   };

//   async function handleCreateNewBanner() {
//     try {

//       if ( !title ) {
//         const Infotitle = 'Atenção! Por favor, informe o título do banner.';        
//         toast.info(Infotitle);
//         return
//       }

//       if ( !selectedImage ) {
//         const InfoImage = 'Atenção! Por favor, insira a imagem do banner.';        
//         toast.info(InfoImage);
//         return
//       }

//       const token = localStorage.getItem('@cmp:token');
//       const ID = user.id

//       const dataBanner = {
//         banner: selectedImage,
//         empresaID: ID,
//         apelido: title,
//         active: isBannerVisible
//       }

//       let formData = new FormData();
            
//       formData.append("banner", {
//         url: selectedImage,
//         name: "image.jpg",
//         type: "image/jpg",
//       });

//       formData.append('empresaID', ID)
//       formData.append('apelido', title)
//       // formData.append('link', link)
//       formData.append('ativo', "true")

//       const response = await api.post('/banner/upload', dataBanner, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//         transformRequest: (data, headers) => {
//           return formData;
//         },
//       });

//       if ( response ) {
//         const successInfo = 'Seu banner foi cadastrado com sucesso!';        
//         toast.success(successInfo);
//         return
//       }

//       // console.log('ACESSEI OS DADOS EM 10:11 =>', dataBanner)
//       // return

//     } catch (error) {
//         console.error('Erro =>', error);

//     } finally {

//     }       
//   }

//   useEffect(() => {
//     // console.log('Resultado de 09:17 =>', selectedImage);
//   },[selectedImage])

//   return (
//     <Drawer
//       isOpen={isVisible}
//       placement='right'
//       size={'md'}
//       onClose={onClose}>
//       <DrawerOverlay />
//       <DrawerContent>
//         <DrawerCloseButton />
//         <DrawerHeader borderBottomWidth='1px'>
//           Adicionar um novo banner
//         </DrawerHeader>
        
//         <DrawerBody>
//           <Stack spacing={8}>
//             <Dropzone onFileUploaded={setSelectedImage} />

//             <Box>
//               <Stack w={'100%'}>
//                 <FormControl>
//                   <Input
//                     placeholder='Digite o título'
//                     onChange={(event) => setTitle(event.target.value)}
//                     name='banner'
//                     type={'text'}
//                     error={errors.title}
//                     register={register}
//                     options={{
//                       required: 'É necessário informar um título.',
//                     }}
//                   />
//                 </FormControl>
//             </Stack>
//             </Box>

//             <Box>
//               <FormControl display='flex' alignItems='center'>
//                 <FormLabel htmlFor='email-alerts' mb='0'>
//                   Ativo?
//                 </FormLabel>

//                 <Switch
//                   isChecked={isBannerVisible}
//                   onChange={handleSwitchChange}
//                   size="lg"
//                   colorScheme="green"
//                   id='email-alerts'
//                 />

//               </FormControl>
//             </Box>
//           </Stack>
//         </DrawerBody>

//         <DrawerFooter borderTopWidth='1px'>
//           <Button backgroundColor={'red.400'} _hover={{ backgroundColor: 'red.600' }} mr={3} onClick={onClose}>
//             Cancelar
//           </Button>

//           <Button 
//             disabled={isLoading} 
//             onClick={handleCreateNewBanner}
//           >
//             Adicionar
//           </Button>

//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   )
// }
