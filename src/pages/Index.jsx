import React from "react";
import { Box, Flex, Heading, Text, Icon, Table, Thead, Tbody, Tr, Th, Td, Button, VStack, HStack, Tag } from "@chakra-ui/react";
import { FaUser, FaCog, FaClipboardList, FaFileAlt, FaProjectDiagram, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const Index = () => {
  const tasks = [
    {
      title: "Exploring the Frontiers: A Deep Dive into Quantum Computing",
      ordning: "Ordning 1",
      project: "Project 1",
      organization: "Organization 1",
      deadline: "2023-06-30",
      funding: "NOK 5,000,000",
    },
    {
      title: "The Future of Medicine: Personalized Treatment through Genomic Sequencing",
      ordning: "Ordning 2",
      project: "Project 2",
      organization: "Organization 2",
      deadline: "2023-07-15",
      funding: "NOK 8,000,000",
    },
    {
      title: "Climate Change Mitigation: Innovative Approaches in Carbon Capture",
      ordning: "Ordning 3",
      project: "Project 3",
      organization: "Organization 3",
      deadline: "2023-08-31",
      funding: "NOK 6,500,000",
    },
    {
      title: "Artificial Intelligence in Healthcare: Revolutionizing Patient Care",
      ordning: "Ordning 4",
      project: "Project 4",
      organization: "Organization 4",
      deadline: "2023-09-30",
      funding: "NOK 7,200,000",
    },
    {
      title: "Sustainable Energy: Harnessing the Power of Fusion Technology",
      ordning: "Ordning 5",
      project: "Project 5",
      organization: "Organization 5",
      deadline: "2023-10-31",
      funding: "NOK 9,000,000",
    },
    {
      title: "Nanotechnology in Agriculture: A New Horizon for Crop Improvement",
      ordning: "Ordning 6",
      project: "Project 6",
      organization: "Organization 6",
      deadline: "2023-11-30",
      funding: "NOK 4,800,000",
    },
    {
      title: "The Role of Big Data in Understanding Disease Patterns",
      ordning: "Ordning 7",
      project: "Project 7",
      organization: "Organization 7",
      deadline: "2023-12-31",
      funding: "NOK 6,200,000",
    },
    {
      title: "Unlocking Human Potential: Neuroscience and Cognitive Enhancement",
      ordning: "Ordning 8",
      project: "Project 8",
      organization: "Organization 8",
      deadline: "2024-01-31",
      funding: "NOK 7,500,000",
    },
    {
      title: "Cybersecurity in the Age of Quantum Computing: Challenges and Opportunities",
      ordning: "Ordning 9",
      project: "Project 9",
      organization: "Organization 9",
      deadline: "2024-02-29",
      funding: "NOK 5,500,000",
    },
    {
      title: "The Impact of Virtual Reality on Education and Training",
      ordning: "Ordning 10",
      project: "Project 10",
      organization: "Organization 10",
      deadline: "2024-03-31",
      funding: "NOK 6,800,000",
    },
  ];

  return (
    <Flex direction="column" minHeight="100vh">
      {}
      <Flex as="header" align="center" justify="space-between" px={4} py={4} bg="#ffffff">
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

          <Table variant="simple" mb={8}>
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
                  <Td>
                    {task.title}
                    <Text fontSize="sm" color="gray.500">
                      Funding: {task.funding}
                    </Text>
                  </Td>
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

          <HStack mt={32} spacing={4}>
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

      {}
      <Flex as="footer" justify="center" py={4} bg="gray.100">
        <Text>Contact us: info@forskningsradet.no | Phone: +47 12345678</Text>
      </Flex>
    </Flex>
  );
};

export default Index;
