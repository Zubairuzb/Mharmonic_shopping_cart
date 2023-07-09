import React from "react";
import { Text, Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";

let Privacy = () => {
  let headerStyles = {
    fontSize: "1.3em",
    fontWeight: "bold",
    color: "#B71375",
    textAlign: "left",
  };
  return (
    <>
      <Text
        w="100%"
        textAlign="center"
        mt="20px"
        fontWeight={700}
        fontSize={{ base: "1.5em", md: "2.5em" }}
        color="#B71375"
      >
        Privacy Policy for Micro Harmonic
      </Text>
      <Flex
        w={{ base: "80%", md: "70%" }}
        m="auto"
        textAlign="justify"
        flexDirection="column"
        gap="15px"
      >
        <Box>
          <Text>
            At Micro harmonic, accessible from microharmonic.com, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Micro harmonic and how we use it. If you have additional
            questions or require more information about our Privacy Policy, do
            not hesitate to contact us. This Privacy Policy applies only to our
            online activities and is valid for visitors to our website with
            regards to the information that they shared and/or collect in Micro
            harmonic. This policy is not applicable to any information collected
            offline or via channels other than this website.
          </Text>
        </Box>
        <Box>
          <Text style={headerStyles}>Consent</Text>
          <Text>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </Text>
        </Box>

        <Box>
          <Text style={headerStyles}>Information we collect</Text>
          <Text>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. <br />
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide. <br />
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </Text>
        </Box>

        <Box>
          <Text style={headerStyles}>Information we collect</Text>
          <Text>
            We use the information we collect in various ways, including to:
          </Text>
          <UnorderedList>
            <ListItem>Provide, operate, and maintain our website</ListItem>
            <ListItem>Improve, personalize, and expand our website</ListItem>
            <ListItem>Understand and analyze how you use our website</ListItem>
            <ListItem>
              Develop new products, services, features, and functionality
            </ListItem>
            <ListItem>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </ListItem>
            <ListItem>Send you emails</ListItem>
            <ListItem>Find and prevent fraud</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Text style={headerStyles}>Log Files</Text>
          <Text>
            Micro harmonic follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information.
          </Text>
        </Box>

        <Box>
          <Text style={headerStyles}>Cookies and Web Beacons</Text>
          <Text>
            Like any other website, Micro harmonic uses "cookies". These cookies
            are used to store information including visitors' preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </Text>
        </Box>

        <Box>
          <Text style={headerStyles}>
            Advertising Partners Privacy Policies
          </Text>
          <Text>
            <Text>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Micro harmonic.
            </Text>
            <Text>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Micro harmonic,
              which are sent directly to users' browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </Text>
            <Text>
              Note that Micro harmonic has no access to or control over these
              cookies that are used by third-party advertisers.
            </Text>
          </Text>
        </Box>

        <Box>
          <Text style={headerStyles}>Third Party Privacy Policies</Text>
          <Text>
            Micro harmonic's Privacy Policy does not apply to other advertisers
            or websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.
          </Text>
          <Text>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </Text>
        </Box>

        <Box>
          <Text style={headerStyles}>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Text>
          <Text>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </Text>
        </Box>
        <Text>
          Request that a business delete any personal data about the consumer
          that a business has collected.
        </Text>
        <Text>
          Request that a business that sells a consumer's personal data, not
          sell the consumer's personal data.
        </Text>
        <Text>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </Text>

        <Box>
          <Text style={headerStyles}>Children's Information</Text>
          <Text>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </Text>
          <Text>
            Micro harmonic does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Text>
        </Box>

        <Box>
          <Text style={headerStyles}>Changes to This Privacy Policy</Text>
          <Text pb="20px">
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default Privacy;
