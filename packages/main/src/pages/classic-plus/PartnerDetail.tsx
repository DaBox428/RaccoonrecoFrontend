import { Media, MediaBody } from "@doar/components";
import Layout from "../../layouts/layout";
import Content from "../../layouts/layout/content";
import ContentHeader from "../../layouts/layout/content-header";
import ContentBody from "../../layouts/layout/content-body";
import LeftSidebar from "../../containers/profile-view/left-sidebar";
import MainContent from "../../containers/profile-view/main";
import RightSidebar from "../../containers/profile-view/right-sidebar";
import SEO from "../../components/seo";

const PartnerDetail = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <Media display={["block", null, null, "flex"]}>
                        <LeftSidebar />
                        <MediaBody
                            mt={["40px", null, null, 0]}
                            px={[null, null, null, "10px"]}
                        >
                            <MainContent />
                        </MediaBody>
                    </Media>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default PartnerDetail;
