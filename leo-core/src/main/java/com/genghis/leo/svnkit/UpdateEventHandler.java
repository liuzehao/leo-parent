package com.genghis.leo.svnkit;

import org.apache.commons.io.FileUtils;
import org.tmatesoft.svn.core.SVNCancelException;
import org.tmatesoft.svn.core.SVNNodeKind;
import org.tmatesoft.svn.core.wc.ISVNEventHandler;
import org.tmatesoft.svn.core.wc.SVNEvent;
import org.tmatesoft.svn.core.wc.SVNEventAction;

import java.io.IOException;

public class UpdateEventHandler implements ISVNEventHandler {

    public void handleEvent(SVNEvent event, double progress) {
        SVNEventAction action = event.getAction();
        SVNNodeKind nodeKind = event.getNodeKind();

        if (SVNNodeKind.DIR.equals(nodeKind)) {
            // folder
            System.out.println(event.getFile().getName());

        } else {
            // treat as file for all other type
            if (action == SVNEventAction.UPDATE_DELETE) {
                try {
                    System.out.println(event.getFile().getName() + "\t" + FileUtils.readFileToString(event.getFile()));
                } catch (IOException e) {

                }
            } else if (action == SVNEventAction.UPDATE_ADD || action == SVNEventAction.UPDATE_UPDATE) {
                try {
                    System.out.println(event.getFile().getName() + "\t" + FileUtils.readFileToString(event.getFile()));
                } catch (IOException e) {

                }
            }
        }
    }

    public void checkCancelled() throws SVNCancelException {
    }

}