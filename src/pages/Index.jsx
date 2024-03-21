import React from "react";
import { Box, Flex, Heading, Text, Icon, Table, Thead, Tbody, Tr, Th, Td, Button, VStack, HStack, Tag } from "@chakra-ui/react";
import { FaUser, FaCog, FaClipboardList, FaFileAlt, FaProjectDiagram, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const Index = () => {
  const tasks = [
    {
      title: "Task 1",
      ordning: "Ordning 1",
      project: "Project 1",
      organization: "Organization 1",
      deadline: "2023-06-30",
    },
    {
      title: "Task 2",
      ordning: "Ordning 2",
      project: "Project 2",
      organization: "Organization 2",
      deadline: "2023-07-15",
    },
    // Add more tasks as needed
  ];

  return (
    <Flex direction="column" minHeight="100vh">
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" px={4} py={2} bg="gray.100">
        <Heading size="md">Forskningsrådet</Heading>
        <HStack spacing={4}>
          <Icon as={FaUser} boxSize={6} />
          <Icon as={FaCog} boxSize={6} />
        </HStack>
      </Flex>

      <Flex flex={1}>
        {/* Sidebar */}
        <VStack as="aside" spacing={8} p={4} bg="gray.50" width="200px" align="stretch">
          <Button leftIcon={<FaClipboardList />}>Section 1</Button>
          <Button leftIcon={<FaFileAlt />}>Section 2</Button>
          <Button leftIcon={<FaProjectDiagram />}>Section 3</Button>
        </VStack>

        {/* Main Content */}
        <Box as="main" flex={1} p={8}>
          <Heading size="lg" mb={8}>
            Mine oppgaver
          </Heading>

          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Tittel</Th>
                <Th>Ordning</Th>
                <Th>Prosjekt/kontrakt</Th>
                <Th>Organisasjon</Th>
                <Th>Frist</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tasks.map((task, index) => (
                <Tr key={index}>
                  <Td>{task.title}</Td>
                  <Td>{task.ordning}</Td>
                  <Td>{task.project}</Td>
                  <Td>{task.organization}</Td>
                  <Td>
                    <Tag colorScheme="red">{task.deadline}</Tag>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <HStack mt={8} spacing={4}>
            <Button colorScheme="blue" size="lg" leftIcon={<FaFileAlt />}>
              Søknader{" "}
              <Tag ml={2} colorScheme="blue">
                10
              </Tag>
            </Button>
            <Button colorScheme="green" size="lg" leftIcon={<FaProjectDiagram />}>
              Prosjekter{" "}
              <Tag ml={2} colorScheme="green">
                5
              </Tag>
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;
